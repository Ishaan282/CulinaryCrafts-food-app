const Social = require('../models/social_schema'); // Import the Social model
const { uploadImageToOneDrive } = require('./onedrive.auth.controller.js'); // Import the OneDrive upload function
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
        const { message, picture, profileName } = req.body;

        let pictureUrl = '';
        
        // If there's a picture, upload it to OneDrive
        if (picture) {
            pictureUrl = await uploadImageToOneDrive(picture); // Upload image and get OneDrive URL or ID
        }

        // Create a new chat message entry
        const chat = new Social({
            message,
            picture: pictureUrl,  // Store the OneDrive URL/ID of the picture
            profileName
        });

        // Save the chat message to the database
        const result = await chat.save(); 
        res.status(201).json(result);  // Respond with the created chat message
    } catch (error) {
        console.error('Error saving chat:', error);
        res.status(500).json({ error: error.message });
    }
};

// Delete a chat message by ID
const chat_delete = async (req, res) => {
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
};

// Image upload handler (handles image file upload and sends it to OneDrive)
const upload_image = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        // Upload the image file to OneDrive and get the URL
        const imageUrl = await uploadImageToOneDrive(req.file.path);

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
    upload_image, // Export the image upload function
};
