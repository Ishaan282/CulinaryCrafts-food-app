// const Social = require('../models/social.model');

// //!showing all the chats
// const chat_index = async (req, res) => {
//     try {
//         const chats = await Social.find().sort({ createdAt: 1 }).lean();

//         if (!chats.length) {
//             return res.status(200).json({ message: "No messages yet" });
//         }

//         res.status(200).json(chats);
//     } catch (error) {
//         res.status(500).json({ 
//             error: "Failed to fetch messages",
//             details: error.message 
//         });
//     }
// };

// //!creating a new chat
// const chat_create = async (req, res) => {
//     try {
//         const { message, picture, user } = req.body; // Now expecting 'user' (username) directly
        
//         const chat = new Social({
//             user: user || "user", // Default to "user" if not provided
//             message: message,
//             picture: picture
//         });
        
//         const result = await chat.save();
//         res.status(201).json(result);
//     } catch (error) {
//         console.error('Error saving chat:', error);
//         res.status(500).json({ 
//             error: 'Failed to save chat message',
//             details: error.message 
//         });
//     }
// };

// //!deleting the chat (unchanged)
// const chat_delete = async (req, res) => {
//     try {
//         const result = await Social.findByIdAndDelete(req.params.id);
//         if (result) {
//             res.status(200).send('Chat deleted!');
//         } else {
//             res.status(404).send('Chat not found!');
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     chat_index,
//     chat_create,
//     chat_delete
// };

const Social = require('../models/social.model');

//!showing all the chats
const chat_index = async (req, res) => {
    try {
        const chats = await Social.find().sort({ createdAt: 1 }).lean();

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
        const { message, picture, user } = req.body;
        
        const chat = new Social({
            user: user || "user", // Default username if not provided
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

//!deleting the chat (unchanged)
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