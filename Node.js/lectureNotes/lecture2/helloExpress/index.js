const express = require("express");

const app = new express();

app.get("/", (req, res) => {
    res.send("Hello Express!")

});

app.listen(3000, () => {
    console.log("server running on port 3000")
})