// const express = require('express');
// const Recipe = require('../models/sanjal_recepies_schema');  // Ensure the schema has `image`, `link`, and `bookmarked` fields
// const router = express.Router();

// // Default dish IDs, names, images, and links to be inserted
// const defaultDishes = [
//   { dishId: "doughnuts-id", name: "Doughnuts" },
//   { dishId: "chocolate-cake-id", name: "Chocolate Cake" },
//   { dishId: "crembrule-id", name: "Creme Brulee" },
//   { dishId: "banana-sunday-id", name: "Banana Sunday" },
//   { dishId: "waffels-id", name: "Waffles" },
//   { dishId: "cheese-cake-id", name: "Cheese Cake" },
//   { dishId: "spinach-corn-ravioli-id", name: "Spinach Corn Ravioli" },
//   { dishId: "pesto-id", name: "Pesto" },
//   { dishId: "alfredo-fettuccine-id", name: "Alfredo Fettuccine" },
//   { dishId: "arrabbiata-id", name: "Arrabbiata" },
//   { dishId: "aglio-e-olio-id", name: "Aglio e Olio" },
//   { dishId: "four-cheese-sauce-id", name: "Four Cheese Sauce" },
//   { dishId: "spinach-white-bean-soup-id", name: "Spinach White Bean Soup" },
//   { dishId: "thai-coconut-curry-soup-id", name: "Thai Coconut Curry Soup" },
//   { dishId: "lentil-soup-id", name: "Lentil Soup" },
//   { dishId: "mushroom-risotto-id", name: "Mushroom Risotto" },
//   { dishId: "veggie-burger-id", name: "Veggie Burger" },
//   { dishId: "alfredo-futticini-id", name: "Alfredo Fettuccine" },
//   { dishId: "falafel-wrap-id", name: "Falafel Wrap" },
//   { dishId: "vegetarian-sushi-rolls-id", name: "Vegetarian Sushi Rolls" },
// ];

// // Function to insert default dishes with bookmarked = false, including image and link
// const insertDefaultDishes = async () => {
//   try {
//     const existingDishes = await Recipe.find({ dishId: { $in: defaultDishes.map(dish => dish.dishId) } });
//     const existingDishIds = existingDishes.map(dish => dish.dishId);

//     const dishesToInsert = defaultDishes.filter(dish => !existingDishIds.includes(dish.dishId));

//     if (dishesToInsert.length > 0) {
//       const newDishes = dishesToInsert.map(dish => ({
//         dishId: dish.dishId,
//         dishName: dish.name,
//         image: dish.image,  // Image URL
//         link: dish.link,  // Recipe Link
//         bookmarked: false,
//       }));
//       await Recipe.insertMany(newDishes);
//       console.log(`Inserted ${dishesToInsert.length} new dishes with bookmarked = false.`);
//     } else {
//       console.log('All dishes already exist in the database.');
//     }
//   } catch (error) {
//     console.error('Error inserting default dishes:', error);
//   }
// };

// // Call the function to insert default dishes once (this can be moved to an initialization route)
// insertDefaultDishes();

// // Route to fetch all bookmarks with optional search query
// router.get('/', async (req, res) => {
//   try {
//     const searchTerm = req.query.search || '';  // Get search term from query parameters

//     // Fetch dishes that match the search term (case-insensitive search on dishName)
//     const bookmarks = await Recipe.find({
//       dishName: { $regex: searchTerm, $options: 'i' }  // Case-insensitive search
//     });

//     res.json({
//       bookmarks: bookmarks.map(b => ({
//         dishId: b.dishId,
//         dishName: b.dishName,
//         image: b.image,  // Include image in the response
//         link: b.link,  // Include link in the response
//         bookmarked: b.bookmarked,
//       }))
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch bookmarks' });
//   }
// });

// // Route to add/remove bookmark
// router.post('/', async (req, res) => {
//   try {
//     const { id, name, image, link } = req.body;  // Dish ID, name, image, and link from the frontend

//     const existingBookmark = await Recipe.findOne({ dishId: id });

//     if (existingBookmark) {
//       existingBookmark.bookmarked = !existingBookmark.bookmarked;  // Toggle bookmark status
//       await existingBookmark.save();
//       res.status(200).json({
//         success: true,
//         bookmarked: existingBookmark.bookmarked
//       });
//     } else {
//       const newBookmark = new Recipe({
//         dishId: id,
//         dishName: name,
//         image: image,
//         link: link,  // Store the recipe link
//         bookmarked: true  // Mark as bookmarked initially
//       });
//       await newBookmark.save();
//       res.status(201).json({
//         success: true,
//         bookmarked: true
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to toggle bookmark' });
//   }
// });

// module.exports = router;


const express = require('express');
const Recipe = require('../models/sanjal_recepies_schema');  // Ensure the schema has `image`, `link`, and `bookmarked` fields
const router = express.Router();

// Default dish IDs, names, images, and links to be inserted
const defaultDishes = [
  { dishId: "doughnuts-id", name: "Doughnuts" },
  { dishId: "chocolate-cake-id", name: "Chocolate Cake" },
  { dishId: "crembrule-id", name: "Creme Brulee" },
  { dishId: "banana-sunday-id", name: "Banana Sunday" },
  { dishId: "waffels-id", name: "Waffles" },
  { dishId: "cheese-cake-id", name: "Cheese Cake" },
  { dishId: "spinach-corn-ravioli-id", name: "Spinach Corn Ravioli" },
  { dishId: "pesto-id", name: "Pesto" },
  { dishId: "alfredo-fettuccine-id", name: "Alfredo Fettuccine" },
  { dishId: "arrabbiata-id", name: "Arrabbiata" },
  { dishId: "aglio-e-olio-id", name: "Aglio e Olio" },
  { dishId: "four-cheese-sauce-id", name: "Four Cheese Sauce" },
  { dishId: "spinach-white-bean-soup-id", name: "Spinach White Bean Soup" },
  { dishId: "thai-coconut-curry-soup-id", name: "Thai Coconut Curry Soup" },
  { dishId: "lentil-soup-id", name: "Lentil Soup" },
  { dishId: "mushroom-risotto-id", name: "Mushroom Risotto" },
  { dishId: "veggie-burger-id", name: "Veggie Burger" },
  { dishId: "alfredo-futticini-id", name: "Alfredo Fettuccine" },
  { dishId: "falafel-wrap-id", name: "Falafel Wrap" },
  { dishId: "vegetarian-sushi-rolls-id", name: "Vegetarian Sushi Rolls" },
];

// Function to insert default dishes with bookmarked = false, including image and link
const insertDefaultDishes = async () => {
  try {
    const existingDishes = await Recipe.find({ dishId: { $in: defaultDishes.map(dish => dish.dishId) } });
    const existingDishIds = existingDishes.map(dish => dish.dishId);

    const dishesToInsert = defaultDishes.filter(dish => !existingDishIds.includes(dish.dishId));

    if (dishesToInsert.length > 0) {
      const newDishes = dishesToInsert.map(dish => ({
        dishId: dish.dishId,
        dishName: dish.name,
        image: dish.image,  // Image URL
        link: dish.link,  // Recipe Link
        bookmarked: false,
      }));
      await Recipe.insertMany(newDishes);
      console.log(`Inserted ${dishesToInsert.length} new dishes with bookmarked = false.`);
    } else {
      console.log('All dishes already exist in the database.');
    }
  } catch (error) {
    console.error('Error inserting default dishes:', error);
  }
};

// Call the function to insert default dishes once (this can be moved to an initialization route)
insertDefaultDishes();

// Route to fetch all bookmarks with optional search query
router.get('/', async (req, res) => {
  try {
    const searchTerm = req.query.search || '';  // Get search term from query parameters

    // Fetch dishes that match the search term (case-insensitive search on dishName)
    const bookmarks = await Recipe.find({
      dishName: { $regex: searchTerm, $options: 'i' }  // Case-insensitive search
    });

    res.json({
      bookmarks: bookmarks.map(b => ({
        dishId: b.dishId,
        dishName: b.dishName,
        image: b.image,  // Include image in the response
        link: b.link,  // Include link in the response
        bookmarked: b.bookmarked,
      }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookmarks' });
  }
});

// Route to add/remove bookmark
router.post('/', async (req, res) => {
  try {
    const { id, name, image, link } = req.body;  // Dish ID, name, image, and link from the frontend

    const existingBookmark = await Recipe.findOne({ dishId: id });

    if (existingBookmark) {
      existingBookmark.bookmarked = !existingBookmark.bookmarked;  // Toggle bookmark status
      await existingBookmark.save();
      res.status(200).json({
        success: true,
        bookmarked: existingBookmark.bookmarked
      });
    } else {
      const newBookmark = new Recipe({
        dishId: id,
        dishName: name,
        image: image,
        link: link,  // Store the recipe link
        bookmarked: true  // Mark as bookmarked initially
      });
      await newBookmark.save();
      res.status(201).json({
        success: true,
        bookmarked: true
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle bookmark' });
  }
});

module.exports = router;
