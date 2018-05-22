var express = require('express');

var router = express.Router();

//Get the todo controller

var ToDoController = require('../../controllers/todos.controller');


//map each api to controller functions

router.get('/', ToDoController.getTodos);

router.post('/', ToDoController.createTodo);

router.put('/', ToDoController.updateTodo);

router.delete('/:id', ToDoController.removeTodo);

//export the router

module.exports = router;