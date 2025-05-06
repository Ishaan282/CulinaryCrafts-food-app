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
    }, //ai

    instructions: {
        type: String,
        required: false,
        trim: true
    },

    generated_content: {  
        type: String,     
        required: true
    }, //ai

    dietary_preference: { 
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