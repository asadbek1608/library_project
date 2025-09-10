const BaseError = require("../error/baseError")
const customValidator = require("../validator/author.validate")

module.exports = function customValidatorMiddleware(req, res, next) {
    try{
        const {error} = customValidatorMiddleware (req.body)

        if (error) {
            throw BaseError.BadRequest(error.massage)
        }

        next()
    }catch(error){
        throw new Error(error)
    }
}