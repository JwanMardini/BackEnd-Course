import pkg from 'pg';
const { Pool } = pkg;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'myadmin',
  host: '172.17.0.2',
  database: 'mydb',
  password: 'pw',
  port: 5432,
});

// CREATE a new character
export async function createCharacter(character) {
  const { name, raceId, birthYear, deathYear, affiliationId } = character;
  const result = await pool.query(
    'INSERT INTO Character (Name, RaceID, BirthYear, DeathYear, AffiliationID) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, raceId, birthYear, deathYear, affiliationId]
  );
  return result.rows[0];
}

// READ all characters, including race and affiliation names
export async function getCharacters() {
    const result = await pool.query(`
      SELECT Character.Name, 
             Race.Name AS Race, 
             Affiliation.Name AS Affiliation, 
             Character.BirthYear, 
             Character.DeathYear 
      FROM Character 
      JOIN Race ON Character.RaceID = Race.RaceID 
      JOIN Affiliation ON Character.AffiliationID = Affiliation.AffiliationID
    `);
    return result.rows;
  }
  
// UPDATE a character
export async function updateCharacter(characterId, updates) {
  const { name, raceId, birthYear, deathYear, affiliationId } = updates;
  const result = await pool.query(
    'UPDATE Character SET Name = $1, RaceID = $2, BirthYear = $3, DeathYear = $4, AffiliationID = $5 WHERE CharacterID = $6 RETURNING *',
    [name, raceId, birthYear, deathYear, affiliationId, characterId]
  );
  return result.rows[0];
}

// DELETE a character
export async function deleteCharacter(characterId) {
  const result = await pool.query(
    'DELETE FROM Character WHERE CharacterID = $1 RETURNING *',
    [characterId]
  );
  return result.rows[0];
}

async function updateTwoCharactersAffiliations(character1Id, newAffiliation1Id, character2Id, newAffiliation2Id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const updateQuery = 'UPDATE Character SET AffiliationID = $1 WHERE CharacterID = $2';
    await client.query(updateQuery, [newAffiliation1Id, character1Id]);
    await client.query(updateQuery, [newAffiliation2Id, character2Id]);
    await client.query('COMMIT');
    console.log('Both characters affiliations updated successfully');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Transaction failed, rolled back changes:', error);
    throw error;
  } finally {
    client.release();
  }
}

export async function getRaces() {
  const result = await pool.query('SELECT * FROM race');
  return result.rows;
}
