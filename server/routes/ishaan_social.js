const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Social = require('../models/social_schema');

//GET
router.get('/', (req, res) => {
    res.send('all Chats!');
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