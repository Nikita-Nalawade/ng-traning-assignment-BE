const express = require('express');
const toDoListController = require('../controllers/toDoListController');

const router = express.Router();

router.post('/addTask', toDoListController.addTask);
router.get('/getList', toDoListController.getList);
router.put('/editTask/:id', toDoListController.updateTask);
router.delete('/deleteTask/:id', toDoListController.deleteTask)


module.exports = router;