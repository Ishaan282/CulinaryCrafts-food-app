// server/routes/ishaan_social.js
const express = require('express');
const router = express.Router();
const { chat_index, chat_create, chat_delete } = require('../controllers/ishaan_social');

router.get('/', chat_index);
router.post('/', chat_create);
router.delete('/:id', chat_delete);

module.exports = router;