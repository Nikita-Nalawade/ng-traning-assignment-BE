
const db = require('../dbConnection');
const TaskList = db.taskList;

//Function to add a task
const addTask = async (req, res) => {
    try {
        const { assignedTo, status, dueDate, priority, comments } = req.body;

        if (!assignedTo || !status || !priority) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new task
        const task = await TaskList.create({
            assignedTo,
            status,
            dueDate,
            priority,
            comments
        });

        return res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        return res.status(500).json({ message: 'Error creating task', error: error.message });
    }
};


// Function to get all tasks
const getList = async (req, res) => {
    try {
        const tasks = await TaskList.findAll();
        return res.status(200).json({ tasks });
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};
// edited
// Function to update an existing task by ID
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;  // Get task ID from the request parameters
        const { assignedTo, status, dueDate, priority, comments } = req.body;  // Get updated task details from request body

        const task = await TaskList.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.update({
            assignedTo: assignedTo || task.assignedTo,
            status: status || task.status,
            dueDate: dueDate || task.dueDate,
            priority: priority || task.priority,
            comments: comments || task.comments
        });

        return res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        return res.status(500).json({ message: 'Error updating task', error: error.message });
    }
};


// Function to delete an existing task by ID
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;  // Get task ID from request parameters

        const task = await TaskList.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Delete the task
        await task.destroy();
        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
};

module.exports = {
    addTask,
    getList,
    updateTask,
    deleteTask
};
