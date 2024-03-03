import pkg from "pg"

const {Pool} = pkg

const pool = new Pool ({
    user: "myadmin",
    host: "172.17.0.4",
    database: "bookStore",
    password: "pw",
    port: 5432,
})

async function getBooks(){
    const result = await pool.query(`
    SELECT * FROM books
    `)
    return result.rows
}

async function getReviews(){
    const result = await pool.query(`
    Select * FROM reviews
    `)
    return result.rows
}


async function getBookById(id) {
    try{
        const result = await pool.query(`
        SELECT * FROM books WHERE id = $1
        `, [id])
        return result.rows
    }catch(err){
        return null
    }
}

async function addBook(title, author, genre=null){
    const result = await pool.query(`
    INSERT INTO books (title, author, genre) VALUES ($1, $2, $3) RETURNING *
    `, [title, author, genre])

    return result.rows[0]
}

async function deleteBook(id){
    const result = await pool.query(`
    DELETE FROM books WHERE id = $1 RETURNING *
    `, [id])
    return result.rows[0]
}


async function getBooksReview(id){
    try{
        const result = await pool.query(`
        SELECT * FROM reviews WHERE book_id = $1
        `, [id])
        return result.rows
    }catch(err){
        console.log(err)
        return null
    }
}

async function deleteReview(id){
    const result = await pool.query(`
    DELETE FROM reviews WHERE id = $1 RETURNING *
    `, [id])
    return result.rows[0]
}

export {getBooks, getReviews, getBookById, addBook, getBooksReview, deleteReview, deleteBook}
// export const books = [
//     {id: 1, title: "title1", author: "author1", genre: "Action"},
//     {id: 2, title: "title2", author: "author2", genre: "Action"},
//     {id: 3, title: "title3", author: "author3", genre: "Action"},
//     {id: 4, title: "title4", author: "author4", genre: "Action"}
// ]

// export const reviews = [
//     {id: 1, bookId: 1, reviewText: "Intresting", rating: 9},  
//     {id: 2, bookId: 3, reviewText: "bad one", rating: 2},
//     {id: 3, bookId: 4, reviewText: "cool", rating: 7}
// ]

