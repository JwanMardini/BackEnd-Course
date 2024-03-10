import express from "express"
import {getBooksReview, deleteReview} from "../data.js"
import verifyApikey from '../apiKeys.js'

export const reviewsRouter = express.Router();

reviewsRouter.use(express.json());
reviewsRouter.use(express.urlencoded({ extended: true }));

reviewsRouter.get("/:id/reviews", verifyApikey, async (req, res) => {
    const reviews = await getBooksReview(req.params.id)
    res.json(reviews)
    // res.json({reviews: reviews.filter(review => review.bookId == req.params.id)})
})


reviewsRouter.delete("/:id", verifyApikey, (req, res) => {
    const reviewId = parseInt(req.params.id);
    // for (let index = 0; index < reviews.length; index++) {
    //     if (reviews[index].id === reviewId) {
    //         const removedReview = reviews.splice(index, 1);
    //         return res.json(removedReview); // Send response and return to exit the function
    //     }
    // }
    const review = deleteReview(reviewId)
    if(review){
        return res.status(200).json(review)
    }
    res.json({message: "Review Not Found......."});
})
