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
        required: true // Set to true if you always want a profile name
    },
    // Removed profilePicture as it's no longer needed
}, {
    timestamps: true
});

module.exports = mongoose.model('Social', socialSchema, 'social');
