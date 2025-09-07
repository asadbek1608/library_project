const { Schema, model } = require("mongoose");

const Author = new Schema({
    full_name: {
        type: String,
        allowNull: false,
        minLength: [2, "full_name kamida 2 ta harf bolishi kerak"],
        set: value => value.trim().toLowerCase(),
        match: [/^[a-zA-Z]+$/, "faqatgina harf bolishi kerak"]
    },
    date_of_birth: {
        type: Number,
        allowNull: false,
        validate: {
            validator: function(value){
                return /^\d{4}/.test(value)
            },
            message: "tug'ilgan yil 4 ta raqamdan tashkil topishi kerak"
        }
    },
    date_of_death: {
        type: Number,
        allowNull: true,
        default: null,
        default: 0,
        validate: {
            validator: function(value){
                return /^\d{4}/.test(value)
            },
            message: "yil 4 ta raqamdan tashkil topishi kerak"
        }
    },
    period: {
        type: String,
        allowNull: false,
        enum: {
            values: ["Temuriylar davri", "Jadid adabiyoti", "Sovet davri", "Mustaqillik davri"],
            message: `{VALUE} bunday davr yoq`
        }
    },
    creativity: {
        type: String,
        allowNull: false
    },
    bio: {
        type: String,
        allowNull: false
    },
    photo: {
        type: String,
        allowNull: false
    },
    phoneNumber: {
        type: String,
        allowNull: false,
        validate: {
            validator: function(value) {
                return /^\+998\d{2} \d{3} \d{2} \d{2}/.test(value)
            },
            message: "+99800 000 00 00 formatida bolishi kerak"
        }
    }
},
{
   timeseries: true,
   versionKey: false
}
)

Author.statics.findByFullName = function(value){
    return this.find({full_name: value})
}

const AuthorSchema = model("Author", Author)
module.exports = AuthorSchema