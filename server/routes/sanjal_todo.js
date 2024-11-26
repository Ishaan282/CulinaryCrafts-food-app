const express = require('express');
const router = express.Router();
const TodoModel = require('../models/sanjal_schema'); // Adjust the path as necessary

// GET 
router.get("/get", (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// PUT /update/:id
router.put('/update/:id', async (req, res) => {
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(
            req.params.id,
            {
                todo: req.body.todo,
                completed: req.body.completed
            },
            { new: true, runValidators: true }
        );

        if (updatedTodo) {
            res.status(200).json(updatedTodo);
        } else {
            res.status(404).send('Todo not found!');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /delete/:id
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// POST /add
router.post("/add", (req, res) => {
    const task = req.body.task;
    TodoModel.create({ todo: task })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

module.exports = router;