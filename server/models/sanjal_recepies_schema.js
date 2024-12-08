// const mongoose = require('mongoose');

// const recipeSchema = new mongoose.Schema({
//     dishId: { type: String, required: true },
// });

// const Recipe = mongoose.model('Recipe', recipeSchema);  // Model named Recipe
// module.exports = Recipe;









const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  dishId: { type: String, required: true },
  bookmarked: { type: Boolean, default: false },  // Default value for all dishes will be false
});

const Recipe = mongoose.model('Recipe', recipeSchema);  // Model named Recipe
module.exports = Recipe;
