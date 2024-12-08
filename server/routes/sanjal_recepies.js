const express = require('express');
const Recipe = require('../models/sanjal_recepies_schema');
const router = express.Router();

// Route to fetch all bookmarks
router.get('/', async (req, res) => {
  try {
    const bookmarks = await Recipe.find();  // Fetch all bookmarks from the database
    res.json({ bookmarks: bookmarks.map(b => b.dishId) }); // Return only the dish IDs
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookmarks' });
  }
});

// Route to add a bookmark
router.post('/', async (req, res) => {
  try {
    const { id } = req.body; // Dish ID from the frontend
    const existingBookmark = await Recipe.findOne({ dishId: id });

    if (existingBookmark) {
      return res.status(400).json({ error: 'Dish already bookmarked' });
    }

    const newBookmark = new Recipe({ dishId: id });
    await newBookmark.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add bookmark' });
  }
});

// Route to remove a bookmark
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Dish ID to be removed
    await Recipe.deleteOne({ dishId: id });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove bookmark' });
  }
});

module.exports = router;





// const express = require('express');
// const Recipe = require('../models/sanjal_recepies_schema'); // Adjust this path according to your project structure
// const router = express.Router();
// const mongoose = require('mongoose');

// // Default dish IDs to be inserted
// const defaultDishes = [
//   "doughnuts-id", "chocolate-cake-id", "crembrule-id", "banana-sunday-id", 
//   "waffels-id", "cheese-cake-id", "spinach-corn-ravioli-id", "pesto-id",
//   "alfredo-fettuccine-id", "arrabbiata-id", "aglio-e-olio-id", "four-cheese-sauce-id",
//   "spinach-white-bean-soup-id", "thai-coconut-curry-soup-id", "lentil-soup-id",
//   "mushroom-risotto-id", "veggie-burger-id", "alfredo-futticini-id", "falafel-wrap-id", 
//   "vegetarian-sushi-rolls-id"
// ];

// // Function to insert default dishes with bookmarked = false
// const insertDefaultDishes = async () => {
//   try {
//     // Check if dishes already exist in the database before inserting
//     const existingDishes = await Recipe.find({ dishId: { $in: defaultDishes } });
//     const existingDishIds = existingDishes.map(dish => dish.dishId);
    
//     // Filter out dishes that already exist
//     const dishesToInsert = defaultDishes.filter(dishId => !existingDishIds.includes(dishId));

//     if (dishesToInsert.length > 0) {
//       // Insert only new dishes
//       await Recipe.insertMany(dishesToInsert.map(dishId => ({ dishId, bookmarked: false })));
//       console.log(`Inserted ${dishesToInsert.length} new dishes with bookmarked = false.`);
//     } else {
//       console.log('All dishes already exist in the database.');
//     }
//   } catch (error) {
//     console.error('Error inserting default dishes:', error);
//   }
// };

// // Call the function only once, and ideally, this should be part of an initialization route.
// insertDefaultDishes(); // You can also move this function call to an endpoint (one-time setup) if needed

// // Route to fetch all bookmarks
// router.get('/', async (req, res) => {
//   try {
//     const bookmarks = await Recipe.find();  // Fetch all bookmarks from the database
//     res.json({
//       bookmarks: bookmarks.map(b => ({ dishId: b.dishId, bookmarked: b.bookmarked }))
//     }); // Return dishId and bookmark status
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch bookmarks' });
//   }
// });

// // Route to add/remove bookmark
// router.post('/', async (req, res) => {
//   try {
//     const { id } = req.body; // Dish ID from the frontend
//     const existingBookmark = await Recipe.findOne({ dishId: id });

//     if (existingBookmark) {
//       // Toggle the bookmark status
//       existingBookmark.bookmarked = !existingBookmark.bookmarked;
//       await existingBookmark.save();
//       res.status(200).json({
//         success: true,
//         bookmarked: existingBookmark.bookmarked
//       });
//     } else {
//       // If the dish doesn't exist, create a new bookmark
//       const newBookmark = new Recipe({ dishId: id, bookmarked: true });
//       await newBookmark.save();
//       res.status(201).json({ success: true });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to toggle bookmark' });
//   }
// });

// // Route to remove a bookmark
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params; // Dish ID to be removed
//     const existingBookmark = await Recipe.findOne({ dishId: id });

//     if (existingBookmark) {
//       existingBookmark.bookmarked = false;  // Set the bookmarked field to false
//       await existingBookmark.save();
//       res.status(200).json({ success: true });
//     } else {
//       res.status(404).json({ error: 'Dish not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to remove bookmark' });
//   }
// });

// module.exports = router;
