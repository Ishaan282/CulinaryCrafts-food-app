const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number, 
        required: true
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
    unit: {
        type: String,
        enum: ['g', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'cup', 'pcs', 'oz', 'lb', 'pinch'],
        default: 'pcs'
    },
    calories: {
        type: Number,
        default: 0
    },
    isVegetarian: {
        type: Boolean,
        default: true
    },
    allergenInfo: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ingredients', ingredientsSchema);
