const { Schema, model } = require("mongoose");

const Book = new Schema({
    title: {
        type: String,
        allowNull: false
    },
    period: {
        type: String,
        allowNull: false
    },
    pages: {
        type: Number,
        allowNull: false,
        min: 3,
        max: 1000
    },
    publishedYear: {
        type: String,
        allowNull: false
    },
    ganre: {
        type: String,
        allowNull: false
    },
    publishedHome: {
        type: String,
        allowNull: false
    },
    desc: {
        type: String,
        allowNull: false
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        allowNull: false
    }
},
{
    versionKey: false,
    timeseries: true
}
)

const BookSchema = model("Book", Book)
module.exports = BookSchema