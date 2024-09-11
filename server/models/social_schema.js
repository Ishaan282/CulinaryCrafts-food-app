const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Social', socialSchema, 'social');
                //('modelName', schema, 'collectionName')