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

    generated_content: {  // Now accepts any JSON structure
        type: mongoose.Schema.Types.Mixed,
        required: true
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