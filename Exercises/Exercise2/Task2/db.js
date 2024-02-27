import sqlite3 from "sqlite3";

let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
    if (err) {
    console.error('Error opening database', err.message);
    } else {
    console.log('Connected to the SQLite database.');
    initializeDb();
    }
    });

const initSql = `
    CREATE TABLE IF NOT EXISTS submission (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    feedback TEXT NOT NULL
    )
    `
function initializeDb() {
    db.exec(initSql, (err) => {
        if (err) {
            console.error('Error initializing database', err.message);
        } else {
            console.log('Database initialized.');
        }
    });
}

export default db