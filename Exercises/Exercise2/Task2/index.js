import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import db from './db.js';


const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "form.html"));
// })


app.post("/submit", (req, res) =>{
    const {name, feedback} = req.body
    if(!name || !feedback){
        res.send("fill both fields")
    } else {
        console.log()
    }
})

app.get("/submisions", (req, res) => {
    db.all('SELECT * FROM submission', [], (err, rows) => {
        if (err) {
        console.error('Database error:', error);
        res.status(500).send('An error occurred while fetching submissions');
        }
        res.json(rows);
});
})


app.listen(3000, () =>{
    console.log("Server running on port 3000")
})
