const express = require('express');
const {createCustomRecipe, getCustomRecipes, getRecipeById , deleteCustomRecipe} = require('../controllers/customRecipe.controller')

const router = express.Router();

//posting the custom created recipe in mongoDB
router.post('/',createCustomRecipe);


//getting all the recipe for user
router.get('/',getCustomRecipes);

//get recipe by ID
router.get('/:id',getRecipeById);

//delete the recipe
router.delete('/:id',deleteCustomRecipe);

module.exports = router;