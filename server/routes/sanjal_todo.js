const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/sanjal_schema.js');

// GET /todo
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find(); // Fetch all todos from the collection
        res.status(200).json(todos); // Send todos as JSON
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch todos" });
    }
});

// POST /todo
router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            completed: req.body.completed
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to create todo" });
    }
});

// DELETE /todo/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete todo" });
    }
});

// PUT /todo/:id
    // used to update a todo
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to update todo" });
    }
});

module.exports = router;