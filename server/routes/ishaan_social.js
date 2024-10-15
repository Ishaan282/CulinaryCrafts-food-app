const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Social = require('../models/social_schema');
const ChatController = require('../controllers/ishaan_social');

// GET
router.get('/' , ChatController.chat_index);

// POST
router.post('/', ChatController.chat_create);

// DELETE
router.delete('/:id', ChatController.chat_delete);

module.exports = router; // Export the router
