const joi = require("joi");

module.exports = function customValidatorBook(data) {
  try {
    const validate = joi.object({
      title: joi.string().min(3).max(20),
      authorId: joi.string(),
      date_of_death: joi.number().integer(),
      period: joi.string(),
      pages: joi.number(),
      publishedYear: joi.date(), 
      ganre: joi.string(),
      desc: joi.string()

    })
  } catch (error) {
    throw new Error(error.message);
  }
  return customValidatorBook.validate(data);
};