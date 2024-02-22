import express from "express";
import compression from 'compression';

const app = express();

//register view engine
app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use(compression());



app.get("/", (req, res) => {
    res.sendFile( "./public/index.html");
});

app.get("/users", (req, res) => {
    const users = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 35 },
    ];
    res.render("template", {users})

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
