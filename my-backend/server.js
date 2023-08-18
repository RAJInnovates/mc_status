const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mytasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

// Define Mongoose Schema and Model
const taskSchema = new mongoose.Schema({
    description: String,
    steps: [String],
    changeNumbers: [String],
    additionalNotes: String
});

const Task = mongoose.model('Task', taskSchema);

// CRUD Routes

// Create (POST)
app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send({ message: 'Error adding task.' });
    }
});

// Read (GET) - All tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching tasks.' });
    }
});

// Read (GET) - Single task
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found.' });
        }
        res.send(task);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching task.' });
    }
});

// Update (PATCH)
app.patch('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).send({ message: 'Task not found.' });
        }
        res.send(task);
    } catch (error) {
        res.status(500).send({ message: 'Error updating task.' });
    }
});

// Delete
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found.' });
        }
        res.send(task);
    } catch (error) {
        res.status(500).send({ message: 'Error deleting task.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

