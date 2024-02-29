import express from "express"
import {reviews} from "../data.js"

export const reviewsRouter = express.Router();

reviewsRouter.use(express.json());
reviewsRouter.use(express.urlencoded({ extended: true }));

reviewsRouter.get("/:id/reviews", (req, res) => {
    res.json({reviews: reviews.filter(review => review.bookId == req.params.id)})
})


reviewsRouter.delete("/:id", (req, res) => {
    const reviewId = parseInt(req.params.id);
    for (let index = 0; index < reviews.length; index++) {
        if (reviews[index].id === reviewId) {
            const removedReview = reviews.splice(index, 1);
            return res.json(removedReview); // Send response and return to exit the function
        }
    }
})
