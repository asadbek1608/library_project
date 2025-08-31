const BookSchema = require("../schema/book.schema");

const searchBooks = async (req, res) => {
    try{
        const serach = req.query.name
        const searchingResult = await BookSchema.find({
            full_name: {$regex: serach, $options: "i"}
        })

        res.status(200).json(searchingResult)
    }catch(error){
        console.log(error.message);
    }
}

const getAllBooks = async (req, res) => {
    try{
        const books = await BookSchema.find().populate("authorId", "-_id")

        res.status(200).json(books)
    }catch(error){
        console.log(error.message);
    }
}

const addBook = async (req, res) => {
    try{
        const {
            title, authorId, period, pages, publishedYear, ganre, publishedHome, desc
        } = req.body

        await BookSchema.create({title, authorId, period, pages, publishedYear, ganre, publishedHome, desc})

        res.status(201).json({message: "Added new book"})
    }catch(error){
        console.log(error.message);
    }
}

const getOneBook = async (req, res) => {
    try{
        const {id} = req.params

        const foundedBook = await BookSchema.findById(id)

        if (!foundedBook) {
            res.status(404).json({message: "Book not found"})
        }

        res.status(200).json(foundedBook)
    }catch(error){
        console.log(error.message);
    }
}

const updateBook = async (req, res) => {
    try{
        const {
            title, authorId, period, pages, publishedYear, ganre, publishedHome, desc
        } = req.body

          const {id} = req.params

        const foundedBook = await BookSchema.findById(id)

        if (!foundedBook) {
            res.status(404).json({message: "Book not found"})
        }

        await BookSchema.findByIdAndUpdate(id, { 
            title, authorId, period, pages, publishedYear, ganre, publishedHome, desc
        }, {new: true})

        res.status(201).json({message: "Book updated"})
    }catch(error){
        console.log(error.message);
    }
}

const deleteBook = async (req, res) => {
    try{
        const {id} = req.params

        const foundedBook = await BookSchema.findById(id)

        if (!foundedBook) {
            res.status(404).json({message: "Book not found"})
        }

        await BookSchema.findByIdAndDelete(id)

        res.status(201).json({message: "Book deleted"})
    }catch(error){
        console.log(error.message);
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