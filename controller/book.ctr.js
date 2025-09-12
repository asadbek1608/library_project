const BaseError = require("../error/baseError");
const BookSchema = require("../schema/book.schema");

const searchBooks = async (req, res, next) => {
    try{
        const serach = req.query.name
        const searchingResult = await BookSchema.find({
            full_name: {$regex: serach, $options: "i"}
        })

        res.status(200).json(searchingResult)
    }catch(error){
        next(error)
    }
}

const getAllBooks = async (req, res, next) => {
    try{
        const books = await BookSchema.find().populate("authorId", "-_id")

        res.status(200).json(books)
    }catch(error){
        next(error)
    }
}

const addBook = async (req, res, next) => {
    try{
        const {
            title, authorId, period, pages, publishedYear, ganre, publishedHome, desc
        } = req.body

        await BookSchema.create({title, authorId, period, pages, publishedYear, ganre, publishedHome, desc})

        res.status(201).json({message: "Added new book"})
    }catch(error){
        next(error)
    }
}

const getOneBook = async (req, res, next) => {
    try{
        const {id} = req.params

        const foundedBook = await BookSchema.findById(id)

        if (!foundedBook) {
            throw BaseError.UnAuthorized("Book not found")
        }

        res.status(200).json(foundedBook)
    }catch(error){
        next(error)
    }
}

const updateBook = async (req, res, next) => {
    try{
        const {
            title, authorId, period, pages, publishedYear, ganre, publishedHome, desc
        } = req.body

          const {id} = req.params

        const foundedBook = await BookSchema.findById(id)

        if (!foundedBook) {
            throw BaseError.UnAuthorized("Book not found")
        }

        await BookSchema.findByIdAndUpdate(id, { 
            title, authorId, period, pages, publishedYear, ganre, publishedHome, desc
        }, {new: true})

        res.status(201).json({message: "Book updated"})
    }catch(error){
        next(error)
    }
}

const deleteBook = async (req, res, next) => {
    try{
        const {id} = req.params

        const foundedBook = await BookSchema.findById(id)

        if (!foundedBook) {
            throw BaseError.UnAuthorized("Book not found")
        }

        await BookSchema.findByIdAndDelete(id)

        res.status(201).json({message: "Book deleted"})
    }catch(error){
        next(error)
    }
}

module.exports = {
    getAllBooks,
    searchBooks,
    getOneBook,
    addBook,
    updateBook,
    deleteBook
}