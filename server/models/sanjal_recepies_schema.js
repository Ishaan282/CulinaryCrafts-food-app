const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  category: {
    type: String,
    // required: true,
  },
  dishes: [
    {
      name: {
        type: String,
        // required: true,
      },
      image: {
        type: String,
        // required: true,
      },
      link: {
        type: String,
        // required: true,
      },
      starsCount: {
        type: Number,
        // required: true,
      },
    },
  ],
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
