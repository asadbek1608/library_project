const {Router} = require("express")
const { getAllBooks, getOneBook, addBook, updateBook, deleteBook, searchBooks } = require("../controller/book.ctr")

const bookRouter = Router()

bookRouter.get("/get_all_books", getAllBooks)
bookRouter.get("/search", searchBooks)
bookRouter.get("/get_one_book/:id", getOneBook)
bookRouter.post("/add_book", addBook)
bookRouter.put("/update_book/:id", updateBook)
bookRouter.delete("/delete_book/:id", deleteBook)

module.exports = bookRouter