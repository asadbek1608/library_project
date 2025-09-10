const customValidatorBook = require("../validator/book.validate")

module.exports = function customValidatorMiddleware(req, res, next) {
    try{
        const {error} = customValidatorBook(req.body)

        if (error) {
            return res.status(400).json(error)
        }
        
        next()
    }catch(error){
        throw new Error(error)
    }
}