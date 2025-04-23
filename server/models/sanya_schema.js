const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
});

module.exports = mongoose.model('Ingredients', ingredientsSchema); 