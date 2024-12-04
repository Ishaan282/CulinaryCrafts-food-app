// Load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Recipe = require('../models/sanjal_recepies_schema'); // Adjusted relative path

const router = express.Router();

// Middleware to parse JSON request bodies
router.use(cors());
router.use(bodyParser.json());

// MongoDB connection using environment variable from .env file
// mongoose.connect(process.env.MONGO_URI, { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.log('MongoDB connection error:', err));

// POST route to save recipes data using the router
router.post('/api/recipes', async (req, res) => {
  const recipesData = req.body; // Expecting data in the same format as in your React component
  try {
    // Save recipes data to MongoDB
    const savedRecipes = await Recipe.insertMany(recipesData);
    res.status(200).json(savedRecipes); // Respond with the saved recipes
  } catch (err) {
    res.status(400).json({ message: 'Error saving recipes', error: err });
  }
});

// Create a new Express app and attach the router
const app = express();

// Use the router in the Express app
app.use(router);

// Start the Express server (Make sure this is uncommented and properly placed)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`MY CODE RUNS`);
// });

module.exports = app;  
