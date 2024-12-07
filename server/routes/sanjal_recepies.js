// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const Recipe = require('../models/sanjal_recepies_schema');
// const router = express.Router();
// const PORT = process.env.PORT || 5000;

// // Middleware
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Route to save recipes
// router.post('/api/recipes', async (req, res) => {
//   const recipesData = req.body;
//   try {
//     const savedRecipes = await Recipe.insertMany(recipesData);
//     res.status(200).json(savedRecipes);
//   } catch (err) {
//     res.status(400).json({ message: 'Error saving recipes', error: err });
//   }
// });

// // Route to add a bookmark to a dish
// // When adding/removing a bookmark for a user
// app.post('/api/recipes/:recipeId/dishes/:dishId/bookmark', async (req, res) => {
//   const { recipeId, dishId } = req.params;
//   const { userId } = req.body;  // Get the userId from request body

//   try {
//     const recipe = await Recipe.findById(recipeId);
//     if (!recipe) return res.status(404).send('Recipe not found');

//     const dish = recipe.dishes.find(d => d.id === dishId);
//     if (!dish) return res.status(404).send('Dish not found');

//     if (!dish.bookmarks.includes(userId)) {
//       dish.bookmarks.push(userId);  // Add userId to the bookmark array
//     } else {
//       dish.bookmarks = dish.bookmarks.filter(user => user !== userId);  // Remove userId from the bookmark array
//     }

//     await recipe.save();
//     res.status(200).send('Bookmark toggled');
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });



// // Route to remove a bookmark from a dish
// app.delete('/api/recipes/:recipeId/dishes/:dishId/bookmark', async (req, res) => {
//   const { recipeId, dishId } = req.params;
//   const { userId } = req.body;

//   try {
//     const recipe = await Recipe.findById(recipeId);
//     if (!recipe) return res.status(404).send('Recipe not found');

//     const dish = recipe.dishes.find(d => d.id === dishId);
//     if (!dish) return res.status(404).send('Dish not found');

//     dish.bookmarks = dish.bookmarks.filter(user => user !== userId);
//     await recipe.save();

//     return res.status(200).send('Bookmark removed');
//   } catch (err) {
//     return res.status(500).send('Server error');
//   }
// });

// // Route to fetch all recipes
// app.get('/api/recipes', async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.status(200).json(recipes);
//   } catch (err) {
//     res.status(500).send('Error fetching recipes');
//   }
// });

// app.use(router);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// module.exports = app;


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Recipe = require('../models/sanjal_recepies_schema'); // Import your Recipe model

const router = express.Router();

router.use(cors());
router.use(bodyParser.json()); // Parse incoming request bodies as JSON

// POST route to add recipes
router.post('/api/recipes', async (req, res) => {
  const recipesData = req.body;

  try {
    const savedRecipes = await Recipe.insertMany(recipesData);
    res.status(200).json(savedRecipes);
  } catch (err) {
    res.status(400).json({ message: 'Error saving recipes', error: err });
  }
});

// PATCH route to toggle bookmark
router.patch('/api/recipes/:recipeId/dishes/:dishId/bookmark', async (req, res) => {
  const { recipeId, dishId } = req.params;
  const userId = req.body.userId;

  try {
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    const dish = recipe.dishes.id(dishId);
    if (!dish) return res.status(404).json({ message: 'Dish not found' });

    if (dish.bookmarks.includes(userId)) {
      dish.bookmarks = dish.bookmarks.filter(user => user !== userId);
    } else {
      dish.bookmarks.push(userId);
    }

    await recipe.save();
    res.status(200).json({ message: 'Bookmark toggled' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// GET route to fetch all recipes
router.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipes', error: err });
  }
});

module.exports = router; // Export only the router
