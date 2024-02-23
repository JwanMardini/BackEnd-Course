import express from "express";
import compression from 'compression';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from "fs";


const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(compression());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile( "./public/index.html");
});

app.get("/show-form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
})

app.get("/users", (req, res) => {
    const users = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 35 },
    ];
    res.render("template", {users})

});

app.post("/submit-form", (req, res) => {
    const {name, password} = req.body;
    fs.appendFileSync("savedData.txt", `Name: ${name}, Password: ${password}\n`);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
