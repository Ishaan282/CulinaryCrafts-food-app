const Social = require('../models/social_schema'); // Import the model

//!showing all the chats
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

//!creating a new chat
const chat_create = async (req, res) => {
    try {
        const chat = new Social({
            message: req.body.message,
            picture: req.body.picture,
            profileName: req.body.profileName
        });
        const result = await chat.save(); // Saves the chat
        res.status(201).json(result);
    } catch (error) {
        console.error('Error saving chat:', error);
        res.status(500).json({ error: error.message });
    }
};

//!deleting the chat
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

module.exports = {
    chat_index,
    chat_create,
    chat_delete
};
