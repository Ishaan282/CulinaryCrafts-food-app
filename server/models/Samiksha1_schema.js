const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,   // `min` changed to `minlength` for clarity
        maxlength: 20,  // `max` changed to `maxlength` for clarity
        unique: true,
        trim: true      // Trims whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,  // `max` changed to `maxlength` for clarity
        trim: true,
        lowercase: true // Ensures email is stored in lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 8    // `min` changed to `minlength` for clarity
    }
});

module.exports = mongoose.model("User", userSchema);  // Changed model name to singular "User"
