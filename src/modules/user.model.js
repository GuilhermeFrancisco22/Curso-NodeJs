const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        //Deixar esse campo obrigatório 
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
})

// iniciar com letra maiscula
const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel