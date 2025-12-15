

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  dishId: { type: String, required: true },
  dishName: { type: String, required: true },
  bookmarked: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;