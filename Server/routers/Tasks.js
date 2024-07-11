const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

// Route to add a new task
router.post('/', TaskController.addTask);

// Route to get the list of tasks
router.get('/', TaskController.getTasks);

// Route to get a single task by ID
router.get('/:id', TaskController.getTaskById);

// Route to update a task
router.put('/:id', TaskController.updateTask);


// Route to delete a task
router.delete('/:id', TaskController.deleteTask);

module.exports = router;