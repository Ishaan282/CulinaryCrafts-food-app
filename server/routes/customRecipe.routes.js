const express = require('express');
const {createCustomRecipe, getCustomRecipes, deleteCustomRecipe} = require('../controllers/customRecipe.controller')

const router = express.Router();

//posting the custom created recipe in mongoDB
router.post('/',createCustomRecipe);


//getting all the recipe for user
router.get('/',getCustomRecipes);

//delete the recipe
router.get('/:id',deleteCustomRecipe);

module.exports = router;