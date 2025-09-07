const AuthorSchema = require("../schema/author.schema");

const searchAuthors = async (req, res) => {
    try{
        const serach = req.query.name
        const searchingResult = await AuthorSchema.find({
            full_name: {$regex: serach, $options: "i"}
        })

        res.status(200).json(searchingResult)
    }catch(error){
        console.log(error.message);
    }
}

const getAllAuthors = async (req, res, next) => {
    try{
        const authors = await AuthorSchema.find()

        res.status(200).json(authors)
    }catch(error){
        console.log(error.message);
    }
}

const addAuthor = async (req, res) => {
    try{
        const {
            full_name, date_of_birth, date_of_death, period, creativity, bio, photo
        } = req.body

        await AuthorSchema.create({full_name, date_of_birth, date_of_death, period, creativity, bio, photo})

        res.status(201).json({message: "Addednew author"})
    }catch(error){
        console.log(error.message);
    }
}

const getOneAuthor = async (req, res) => {
    try{
        const {full_name} = req.params

        const foundedAuthor = await AuthorSchema.findByFullName(full_name)

        if (!foundedAuthor) {
            res.status(404).json({message: "Author not found"})
        }

        res.status(200).json(foundedAuthor)
    }catch(error){
        console.log(error.message);
    }
}

const updateAuthor = async (req, res) => {
    try{
         const {
            full_name, date_of_birth, date_of_death, period, creativity, bio, photo
        } = req.body

        const {id} = req.params

        const foundedAuthor = await AuthorSchema.findById(id)

        if (!foundedAuthor) {
            res.status(404).json({message: "Author not found"})
        }

        const newAuthor = await AuthorSchema.findByIdAndUpdate(id, {full_name, date_of_birth, date_of_death, period, creativity, bio, photo}, {new: true})

        res.status(201).json({message: "Author updated"})
    }catch(error){
        console.log(error.message);
    }
}

const deleteAuthor = async (req, res) => {
    try{
        const {id} = req.params

        const foundedAuthor = await AuthorSchema.findById(id)

        if (!foundedAuthor) {
            res.status(404).json({message: "Author not found"})
        }

        await AuthorSchema.findByIdAndDelete(id)

        res.status(201).json({message: "Author deleted"})
    }catch(error){
        next(error)
    }
}

module.exports = {
    getAllAuthors,
    searchAuthors,
    addAuthor,
    getOneAuthor,
    updateAuthor,
    deleteAuthor
}