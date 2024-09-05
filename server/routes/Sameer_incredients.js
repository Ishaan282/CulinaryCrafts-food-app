const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Ingredients = require('../models/Sameer_schema'); 

// GET 
router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredients.find();
        res.json(ingredients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST 
router.post('/', async (req, res) => {
    const ingredient = new Ingredients({
        name: req.body.name,
        price: req.body.price
    });

    try {
        const newIngredient = await ingredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        const ingredient = await Ingredients.findByIdAndDelete(req.params.id);

        if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });

        res.json(ingredient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE 
router.patch('/:id', async (req, res) => {
    try {
        const ingredient = await Ingredients.findById(req.params.id);

        if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });

        if (req.body.name != null) {
            ingredient.name = req.body.name;
        }

        if (req.body.price != null) {
            ingredient.price = req.body.price;
        }

        const updatedIngredient = await ingredient.save();
        res.json(updatedIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
