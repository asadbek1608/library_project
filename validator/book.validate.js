const joi = require("joi");

module.exports = function customValidatorBook(data) {
  try {
    const validate = joi.object({
      title: joi.string().min(3).max(100).required(),
      authorId: joi.string().required(),
      period: joi.string().required(),
      pages: joi.number().integer().min(30).required(),
      publishedYear: joi.number().integer().required(), 
      ganre: joi.string().min(3).required(),
      desc: joi.string()
    })

    return validate.validate(data)
  } catch (error) {
    throw new Error(error.message)
  } 
}