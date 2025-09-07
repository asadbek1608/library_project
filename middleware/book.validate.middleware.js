const customValidatorBook = require("../validator/book.validate")

module.exports = function(err, req, res, next) {
    try{
        const {error} = customValidatorBook(req.body)

        if (error) {
            console.log("our error is " + error);
        }
    }catch(error){
        throw
    }
}