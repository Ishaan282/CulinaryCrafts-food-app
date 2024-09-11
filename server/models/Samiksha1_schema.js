const mongoose = require("mongoose");

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
        maxlength: 50,  
        trim: true,
        lowercase: true // Ensures email is stored in lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 8    
    }
});

module.exports = mongoose.model("User", userSchema);  // Changed model name to singular "User"
