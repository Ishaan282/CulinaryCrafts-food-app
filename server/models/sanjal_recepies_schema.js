const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  category: {type: String,},
  dishes: [
    {
      name: {type: String,},
      image: {type: String,},
      link: {type: String, },
      starsCount: {type: Number, },
      bookmarked: { type: Boolean, default: false },
      ///// bookmarks: [{ type: String }]
    },
  ],
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
