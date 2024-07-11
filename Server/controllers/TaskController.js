const Task = require('../models/Task');

// Route to add a new task
exports.addTask = async (req, res) => {
    try {
        const {
            title,
            description,
            dueDate,
            completed,
        } = req.body;

        const newTask = new Task({
            title,
            description,
            dueDate,
            completed,
        });

        await newTask.save();
        res.status(201).json({ message: 'Task added successfully' });
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route to get a single task by ID
exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: 'task not found' });
        }
        res.json(task);
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route to get the list of Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log(tasks)
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
};

// Route to update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Route to delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(204).send(); // No content response
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
