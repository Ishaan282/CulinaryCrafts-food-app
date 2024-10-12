const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    message: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    profileName: {
        type: String,
        required: false // Temporarily set to false
    },
    profilePicture: {
        type: String,
        required: false // Temporarily set to false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Social', socialSchema, 'social');