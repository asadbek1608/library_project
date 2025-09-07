const { Schema, model } = require("mongoose");

const Auth = new Schema({
    username: {
        type: String,
        allowNull: false
    },
    email: {
        type: String,
        allowNull: false
    },
    password: {
        type: String,
        allowNull: false
    },
     role: {
        type: String,
        allowNull: true,
        default: "user"
    },
    otp: {
        type: Number,
        allowNull: true,
        default: 0
    },
    isVerified: {
        type: Boolean,
        allowNull: true,
        default: false
    },
    otpTime: {
        type: Number,
        allowNull: false
    }
},
{
   timestamps: true,
   versionKey: false
}
)


const AuthSchema = model("Auth", Auth)
module.exports = AuthSchema