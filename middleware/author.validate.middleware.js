const customValidator = require("../validator/author.validate")

module.exports = function(err, req, res, next) {
    try{
        const {error} = customValidator (req.body)

        if (error) {
            console.log("our error is " + error);
        }
    }catch(error){
        throw
    }
}