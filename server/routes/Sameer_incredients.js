const express = require('express');
const router = require.Router();
const mongoose = require('mongoose');
const Incrediants = require('../models/Sameer_schema');

//Get

router.get('/', async (req, res) => {
    try {
        const incrediants = await Incrediants.find();
        res.json(incrediants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Post

router.post('/', async (req, res) => {
    const incrediant = new Incrediants({
        name: req.body.name,
        price: req.body.price
    });

    try {
        const newIncrediant = await incrediant.save();
        res.status(201).json(newIncrediant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//delete

router.delete('/:id', async (req, res) => {
    try {
        const incrediant = await Incrediants.findByIdAndDelete(req.params.id);

        if (!incrediant) return res.status(404).json({ message: 'Incrediant not found' });

        res.json(incrediant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Update