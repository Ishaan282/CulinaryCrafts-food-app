const Social = require('../models/social.model'); // Import the model

//!showing all the chats
const chat_index = async (req, res) => {
    try {
        let chats = await Social.find()
            .sort({ createdAt: 1 })
            .populate('user', 'username')
            .lean(); // Convert to plain JS objects

        // Apply default username if user not found
        chats = chats.map(chat => ({
            ...chat,
            user: chat.user ? chat.user : { username: "user" }
        })); //if user doesn't exist return default value "User"

        if (!chats.length) {
            return res.status(200).json({ message: "No messages yet" });
        }

        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ 
            error: "Failed to fetch messages",
            details: error.message 
        });
    }
};

//!creating a new chat
const chat_create = async (req, res) => {
    try {
        const { message, picture, userId } = req.body;
        
        // Find the user to get their username
        const user = await User.findById(userId);
        const username = user?.username || "user"; // Default to "user" if no username found
        
        const chat = new Social({
            user: userId,       // Reference to User document
            username: username, // Store the actual username string
            message: message,
            picture: picture
        });
        
        const result = await chat.save();
        res.status(201).json(result);
    } catch (error) {
        console.error('Error saving chat:', error);
        res.status(500).json({ 
            error: 'Failed to save chat message',
            details: error.message 
        });
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
