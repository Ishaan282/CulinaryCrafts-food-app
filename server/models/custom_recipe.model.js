const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    prompt: {
        type: String,
        required: false,
        trim: true
    },
    answer: {
        type: String,
        required: false,
        trim: true
    },

    isVegetarian: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ingredients', ingredientsSchema);
