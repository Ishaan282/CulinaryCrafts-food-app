const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  category: {type: String,},
  dishes: [
    {
      name: {type: String,},
      image: {type: String,},
      link: {type: String, },
      starsCount: {type: Number, },
    },
  ],
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
