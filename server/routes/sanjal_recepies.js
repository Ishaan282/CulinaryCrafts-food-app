const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Recipe = require('./models/sanjal_recepies_schema');    
const app = express();

// Middleware to parse JSON request bodies
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (Replace with your MongoDB URI)
mongoose.connect('mongodb://your_mongo_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));


// POST route to save recipes data
app.post('/api/recipes', async (req, res) => {
  const recipesData = req.body; // Expecting data in the same format as in your React component

  try {
    // Save recipes data to MongoDB
    const savedRecipes = await Recipe.insertMany(recipesData);
    res.status(200).json(savedRecipes); // Respond with the saved recipes
  } catch (err) {
    res.status(400).json({ message: 'Error saving recipes', error: err });
  }
});


// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
