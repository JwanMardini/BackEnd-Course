import express from "express";
import {booksRouter} from "./routers/books.js"
import {reviewsRouter} from "./routers/reviews.js"
import { theApiKeys } from "./apiKeys.js";
import helmet from "helmet";
import { handler as errorHandler } from './errorHandler.js'

const app = express()

// Use Helmet!
app.use(helmet());

app.use("/books", booksRouter)
app.use("/reviews", reviewsRouter)

app.get("/api", (req, res) => {
    res.json(theApiKeys)
})




// Error handler
app.use(errorHandler.notFoundDefault)
app.use(errorHandler.errorDefault)


// // custom 404
// app.use((req, res, next) => {
//     res.status(404).send("Not found")
// })


// // custom error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something is broke')
// })
  

app.listen(3000, () => {
    console.log("Running on: http//:localhost:3000")
})