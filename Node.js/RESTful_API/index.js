import express from "express";

const app = express()

app.use(express.json())

const courses = [];

app.get("/api/courses/:id", (req, res) => {
    res.send(req.params)
})

app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.listen(3000, () => {
    console.log("Running")
})