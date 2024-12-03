// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// MongoDB URI (replace with your actual MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/recipesDB'; 

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dish Schema
const dishSchema = new mongoose.Schema({
  category: String,
  link: String,
  image: String,
  name: String,
  starsCount: Number,
});

const Dish = mongoose.model('Dish', dishSchema);

// API route to get all dishes
app.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API route to add a new dish
app.post('/api/dishes', async (req, res) => {
  try {
    const { category, link, image, name, starsCount } = req.body;
    const newDish = new Dish({ category, link, image, name, starsCount });
    await newDish.save();
    res.json(newDish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;