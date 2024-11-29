const express = require('express');
const User = require('../models/Samiksha1_schema'); // Import the User model
const { register, login } = require('../routes/Samiksha1_signup'); // Import the register function

const router = express.Router();

// Route for user registration (POST request)
router.post('/register', register);

// GET route to retrieve all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        if (users.length === 0) {
            res.status(200).json({ message: "No users found" });
        } else {
            res.status(200).json(users); // Return all users in JSON format
        }
    } catch (error) {
        console.error("Error retrieving users:", error); // Log the error
        res.status(500).json({ error: "An error occurred while retrieving users" }); // Send error response
    }
});

// DELETE route to remove a user by username
router.delete('/user/:username', async (req, res) => {
    try {
        const username = req.params.username; // Get username from URL parameters
        const result = await User.deleteOne({ username }); // Delete the user from the database
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" }); // Send success response
    } catch (error) {
        console.error("Error deleting user:", error); // Log the error
        res.status(500).json({ error: "An error occurred while deleting the user" }); // Send error response
    }
});


router.post('/login', login);

module.exports = router;