const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Social = require('../models/social_schema');

//GET
router.get('/', async (req, res) => {
    try {
        const chats = await Social.find();
        if (chats.length === 0) {
            res.status(200).json({ message: "type something" });
        } else {
            res.status(200).json(chats);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST
router.post('/', async (req, res) => {
    try {
        console.log('Received POST request:', req.body); // Log the data sent to the server
        const chat = new Social({
            message: req.body.message,
            picture: req.body.picture});

        const result = await chat.save(); //saves the chat
        res.status(201).json(result);
    } catch (error) {
        console.error('Error saving chat:', error);
        res.status(500).json({ error: error.message });
    }
});


//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const result = await Social.findByIdAndDelete(req.params.id);
        if (result) {
            res.status(200).send('Chat deleted!');
        } else {
            res.status(404).send('Chat not found!');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//update
router.put('/:id', async (req, res) => {
    try {
        const updatedChat = await Social.findByIdAndUpdate(
            req.params.id,
            {
                message: req.body.message,
                picture: req.body.picture
            },
            { new: true, runValidators: true }
        );

        if (updatedChat) {
            res.status(200).json(updatedChat);
        } else {
            res.status(404).send('Chat not found!');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; // Export the var