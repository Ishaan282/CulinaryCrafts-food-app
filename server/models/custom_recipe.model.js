// server/models/customRecipe.model.js
const mongoose = require("mongoose");

const customRecipeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    
    recipe_name: {
        type: String,
        required: true,
        trim: true
    },

    instructions: {
        type: String,
        required: false,
        trim: true
    },

    generated_content: {  // Renamed from 'answer' for clarity
        type: String,
        required: false,
        trim: true
    },

    dietary_preference: {  // More descriptive than isVegetarian
        type: String,
        enum: ['vegetarian', 'non-vegetarian', 'vegan', 'flexitarian'],
        default: 'vegetarian'
    }, //gonna be a drop down in frontend

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CustomRecipe', customRecipeSchema);