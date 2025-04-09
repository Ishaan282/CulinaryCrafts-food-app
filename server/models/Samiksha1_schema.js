const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,   
        maxlength: 20,  
        unique: true,
        trim: true      // Trims whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 70,
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = mongoose.model("User", userSchema);  //model name user
