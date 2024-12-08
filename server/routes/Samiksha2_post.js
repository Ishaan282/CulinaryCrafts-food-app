const express = require('express');
const User = require('../models/Samiksha1_schema'); // Import the User model
const { register, login } = require('../routes/Samiksha1_signup'); // Import the register function

const router = express.Router();

// Route for user registration (POST request)
router.post('/signup', register);

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

router.patch('/update-user', async (req, res) => {
    try {
        const { userId, newUsername, newemail } = req.body; // Destructure fields from request body

        // Validate the input
        if (!userId || !newUsername || !newemail) {
            return res.status(400).json({ error: 'userId, newUsername, and newemail are required' });
        }

        // Find the user by ID and update username and email
        const updatedUser = await User.findByIdAndUpdate(
            userId, // Find user by ID
            { username: newUsername, email: newemail }, // Update fields
            { new: true } // Return the updated document
        );

        // If user not found, return an error
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Respond with the updated user
        res.status(200).json({
            message: 'User updated successfully',
            user: updatedUser,
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'An error occurred while updating the user' });
    }
});



router.post('/login', login);

module.exports = router;