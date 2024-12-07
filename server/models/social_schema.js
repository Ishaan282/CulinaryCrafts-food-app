const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    message: {
        type: String,
        required: false
    },
    picture: {
        type: String, // URL or base64 string
        required: false
    },
    profileName: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Social', socialSchema, 'social');

