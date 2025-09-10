const {Router} = require("express")
const { getAllBooks, getOneBook, addBook, updateBook, deleteBook, searchBooks } = require("../controller/book.ctr")
const customValidatorMiddleware = require("../validator/book.validate")
const accessTokenMiddleware = require("../middleware/accessToken.middleware")

const bookRouter = Router()

bookRouter.get("/get_all_books", accessTokenMiddleware, getAllBooks)
bookRouter.get("/search", accessTokenMiddleware, searchBooks)
bookRouter.get("/get_one_book/:id",accessTokenMiddleware, getOneBook)
bookRouter.post("/add_book",accessTokenMiddleware, customValidatorMiddleware, addBook)
bookRouter.put("/update_book/:id",accessTokenMiddleware, updateBook)
bookRouter.delete("/delete_book/:id", accessTokenMiddleware, deleteBook)

module.exports = bookRouter