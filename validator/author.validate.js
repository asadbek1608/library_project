const joi = require("joi");

module.exports = function customValidator(data) {
  try {
    const validate = joi.object({
      full_name: joi.string().min(3).max(20),
      date_of_birth: joi.number().integer(),
      date_of_death: joi.number().integer(),
      period: joi.string(),
      creativity: joi.string(),
      bio: joi.string(), 
      photo: joi.string(),
      phoneNumber: joi.string()

    })
  } catch (error) {
    throw new Error(error.message);
  }
  return validate.validate(data);
};