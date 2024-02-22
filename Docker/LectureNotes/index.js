import express from 'express'

const app = new express()

app.get("/", (req, res) => {
    res.send("Hello Docker")
})

app.listen(3000, () => {
    console.debug("Server running on port 3000")
})