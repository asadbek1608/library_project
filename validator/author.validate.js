const joi = require("joi");

module.exports = function customValidator(data) {
  try {
    const validate = joi.object({
      full_name: joi.string().min(3).max(100).required(),
      date_of_birth: joi.number().integer().required(),
      date_of_death: joi.number().integer().optional(),
      period: joi.string().required(),
      creativity: joi.string().min(30).required(),
      bio: joi.string().min(30).required(), 
      photo: joi.string().required(),
      phoneNumber: joi.string().required9
    })
    return validate.validate(data)
  } catch (error) {
    throw new Error(error.message)
  }
}