require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Recipe = require('../models/sanjal_recepies_schema'); // Import your Recipe model

const router = express.Router();

// Middleware
router.use(cors());
router.use(bodyParser.json()); // Parse incoming request bodies as JSON

// POST route to add recipes
router.post('/api/recipes', async (req, res) => {
  const recipesData = req.body;

  try {
    const savedRecipes = await Recipe.insertMany(recipesData); // Insert all recipes
    res.status(200).json(savedRecipes);
  } catch (err) {
    res.status(400).json({ message: 'Error saving recipes', error: err });
  }
});

// PATCH route to toggle bookmark for a dish
router.patch('/api/recipes/:recipeId/dishes/:dishId/bookmark', async (req, res) => {
  const { recipeId, dishId } = req.params;
  const userId = req.body.userId; // Ensure the userId is passed in the request body

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    // Find the recipe by ID
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Find the dish by ID within the recipe's dishes array
    const dish = recipe.dishes.id(dishId);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    // Toggle the bookmark status for the user
    if (dish.bookmarks.includes(userId)) {
      // If already bookmarked by the user, remove the bookmark
      dish.bookmarks = dish.bookmarks.filter(id => id.toString() !== userId);
    } else {
      // If not bookmarked, add the userId to the bookmarks array
      dish.bookmarks.push(userId);
    }

    // Save the updated recipe
    await recipe.save();

    res.status(200).json({ message: 'Bookmark toggled', bookmarked: dish.bookmarks.includes(userId) });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// GET route to fetch all recipes with dishes
router.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from the database
    res.status(200).json(recipes); // Send the recipes as response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipes', error: err });
  }
});

module.exports = router; // Export the router



// const express = require('express');
// const Recipe = require('../models/sanjal_recepies_schema');
// const router = express.Router();

// // API Routes
// // Fetch all dishes
// router.get('/api/dishes', async (req, res) => {
//   try {
//     const dishes = await Dish.find();
//     res.json(dishes);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching dishes' });
//   }
// });

// // Bookmark a dish (toggle)
// router.patch('/api/dishes/:id/bookmark', async (req, res) => {
//   try {
//     const dish = await Dish.findById(req.params.id);
//     if (!dish) return res.status(404).json({ message: 'Dish not found' });

//     dish.bookmark = !dish.bookmark; // Toggle bookmark status
//     await dish.save();
//     res.json(dish);
//   } catch (err) {
//     res.status(500).json({ message: 'Error toggling bookmark' });
//   }
// });

// module.exports = router;