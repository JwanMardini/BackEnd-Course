import express from "express";
import {booksRouter} from "./routers/books.js"
import {reviewsRouter} from "./routers/reviews.js"

const app = express()

app.use("/books", booksRouter)
app.use("/reviews", reviewsRouter)



app.listen(3000, () => {
    console.log("Running on: http//:localhost:3000")
})