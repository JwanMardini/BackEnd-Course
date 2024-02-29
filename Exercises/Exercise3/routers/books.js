import express from "express"
import {books} from "../data.js"
import {reviewsRouter} from "./reviews.js"

export const booksRouter = express.Router();

booksRouter.use(express.json());
booksRouter.use(express.urlencoded({ extended: true }));

function generateHalLinks(baseUrl, book=null){
    const links = book === null ?  {
        self: { href: `${baseUrl}/books` },
        create: { href: `${baseUrl}/books`, method: "POST" }
    } : {
        // Define self link for an individual character
        self: { href: `${baseUrl}/books/${book.id}` }
    };

    // If a character object is provided, add additional links relevant to that character
    if (book) {
        // Example of adding a hypothetical update action; adjust as needed
        links.update = { href: `${baseUrl}/characters/${book.id}`, method: "PATCH" };
    }
    return links;

}

booksRouter.get("/", (req, res) => {
    const baseUrl = `${req.protocol}://${req.get("host")}`
    const hideLinks = req.query.hideLinks === 'true';

    const booksWithLinks = books.map(book => ({
            id: book.id,
            title: book.title,
            ...(hideLinks ? {} : { _links: generateHalLinks(baseUrl, book) })
    }));
    console.log(booksWithLinks)
    res.json({
        count: books.length,
        _links: generateHalLinks(baseUrl),
        _embedded: {
            books: booksWithLinks
        }
    });
});

booksRouter.post("/", (req, res) => {
    if(req.body.author && req.body.title){
        const {title, author, genre} = req.body;

        const book = {
            id: books.length + 1,
            title: title,
            author: author,
            genre: genre
        }
        books.push(book)
        res.status(201).json(book)
    }else{
        res.json({
            message: "Write an author name and a title at least"
        })
    }
    
})


booksRouter.get("/:id", (req, res) => {
    const hideLinks = req.query.hideLinks === 'true';
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const id = req.params.id
    let book = books.find(book => book.id === parseInt(id));
    book = {
        id: book.id,
        title: book.title,
        ...(hideLinks ? {} : { _links: generateHalLinks(baseUrl, book)})
    };

    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message: "Book not found"
        })
    }
})


booksRouter.put("/:id", (req, res) =>{
    const book = books.find(book => book.id === id)
    if(book){
        
    }

})


booksRouter.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    // Check if the books array is empty or if the bookId is invalid
    if(books.length === 0 || bookId < 0) {
        return res.json({message: "No Books available"});
    }

    // Attempt to find and remove the book by ID
    for (let index = 0; index < books.length; index++) {
        if (books[index].id === bookId) {
            const removedBook = books.splice(index, 1);
            return res.json(removedBook); // Send response and return to exit the function
        }
    }

    // If no book is found with the given ID, send a "Books Not Found" message
    res.json({message: "Books Not Found......."});
});

booksRouter.use("/", reviewsRouter)
