const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/sanjal_schema.js');

// GET /get
router.get("/get", (req, res) => {
    Todo.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// PUT /update/:id
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndUpdate(id, { done: true }, { new: true })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// DELETE /delete/:id
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// POST /add
router.post("/add", (req, res) => {
    const task = req.body.task;
    Todo.create({ task })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

module.exports = router;