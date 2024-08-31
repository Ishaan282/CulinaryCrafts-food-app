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

//POST
router.post('/', (req, res) => {
    res.send('Chat posted!');
});


//DELETE
router.delete('/:id', (req, res) => {
    res.send('Chat deleted!');
});

//PUT
router.put('/:id', (req, res) => {
    res.send('Chat updated!');
});

module.exports = router; // Export the router object