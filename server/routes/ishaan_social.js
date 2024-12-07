const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { upload_image, chat_index, chat_create, chat_delete } = require('../controllers/ishaan_social');

// Multer setup for file uploads (image files)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Store uploaded images in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
    }
});

const upload = multer({ storage });  // Initialize multer with the defined storage settings

// Route for uploading images
router.post('/upload-image', upload.single('file'), upload_image); // 'file' is the field name for the uploaded file

// Route for displaying chat messages
router.get('/', chat_index);

// Route for creating a new chat message
router.post('/', chat_create);

// Route for deleting a chat message
router.delete('/:id', chat_delete);

module.exports = router;