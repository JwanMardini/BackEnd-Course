import express from 'express';
import { getCharacters, createCharacter, updateCharacter, deleteCharacter, getRaces } from './DB.js';

const app = express();
app.use(express.json());

app.get('/characters', async (req, res) => {
  const characters = await getCharacters();
  res.json(characters);
});

app.post('/characters', async (req, res) => {
    try {
        const characterData = req.body;
        const newCharacter = await createCharacter(characterData);
        res.status(201).json(newCharacter);
    } catch (error) {
        console.error('Error creating character:', error);
        res.status(500).json({ message: 'Error creating character' });
    }
});

// Initialize a cache object
const raceCache = {
  lastFetch: 0,
  cacheDuration: 300000, // cache duration in milliseconds, e.g., 300000ms for 5 minutes
  data: null
};

// Immediately load the race cache upon server start
getRaces().then(races => {
  raceCache.data = races;
  raceCache.lastFetch = Date.now();
}).catch(console.error);

// Function to check cache and return races
async function getCachedRaces() {
  const now = Date.now();
  if (!raceCache.data || now - raceCache.lastFetch > raceCache.cacheDuration) {
    raceCache.data = await getRaces(); // Fetch from the database if not in cache or cache is expired
    raceCache.lastFetch = now;
  }
  return raceCache.data;
}

// Endpoint to get all races with caching
app.get('/races', async (req, res) => {
  try {
    const races = await getCachedRaces();
    res.json(races);
  } catch (error) {
    console.error('Error fetching races:', error);
    res.status(500).json({ message: 'Error fetching races' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
