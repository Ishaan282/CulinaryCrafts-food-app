const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  dishes: [
    {
      link: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      starsCount: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Create and export the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
