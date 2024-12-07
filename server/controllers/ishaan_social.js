const Social = require('../models/social_schema'); // Import the Social model
const { uploadImageToOneDrive, deleteImageFromOneDrive } = require('./onedrive.auth.controller.js'); // Import the OneDrive functions
const multer = require('multer');
const path = require('path');

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

// Show all the chat messages
const chat_index = async (req, res) => {
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
};

// Create a new chat message (text or image)
const chat_create = async (req, res) => {
    try {
        let imageUrl = null;
        if (req.file) {
            // Upload the image file to OneDrive and get the URL
            imageUrl = await uploadImageToOneDrive(req.file.path, req.file.originalname);
        }

        // Create a new chat message with the image URL
        const newChat = new Social({
            profileName: req.body.profileName,
            message: req.body.message,
            picture: imageUrl // Store the image URL as a string
        });

        await newChat.save();
        res.status(201).json(newChat);
    } catch (error) {
        console.error('Error saving chat:', error);
        res.status(500).json({ error: error.message });
    }
};

// Delete a chat message by ID
const chat_delete = async (req, res) => {
    try {
        const { pictureUrl } = req.body; // Get picture URL from request body
        const result = await Social.findByIdAndDelete(req.params.id);
        if (result) {
            if (pictureUrl) {
                await deleteImageFromOneDrive(pictureUrl); // Delete the image from OneDrive
            }
            res.status(200).send('Chat deleted!');
        } else {
            res.status(404).send('Chat not found!');
        }
    } catch (error) {
        console.error('Error deleting chat:', error);
        res.status(500).json({ error: error.message });
    }
};

// Image upload handler (handles image file upload and sends it to OneDrive)
const upload_image = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        // Upload the image file to OneDrive and get the URL
        const imageUrl = await uploadImageToOneDrive(req.file.path, req.file.originalname);
        console.log('Image URL:', imageUrl); // Log the image URL

        res.status(200).json({ picture: imageUrl }); // Return the image URL in the response
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    chat_index,
    chat_create,
    chat_delete,
    upload_image,
};