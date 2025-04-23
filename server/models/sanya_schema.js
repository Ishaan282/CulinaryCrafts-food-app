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

<<<<<<< HEAD
module.exports = mongoose.model('Ingredients', ingredientsSchema); 
=======
module.exports = mongoose.model('Ingredients', ingredientsSchema);
>>>>>>> ed1315bb721fec61c388652349f6fcf50c16495c
