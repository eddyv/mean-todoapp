//Get the model 

var ToDo = require('../models/todo.model');

//save the this instance to the _this variable

var _this = this;

//Async func to get the todo list

exports.getTodos = async function (query, page, limit) {
    // options setup for mongoose paginate

    var options = {
        page,
        limit
    };

    //error handling for the promise
    try {
        var todos = await ToDo.paginate(query, options);
        return todos;
    } catch (e) {
        throw Error('Error while paginating Todos');
    }
};

//Async func to create a todo

exports.createTodo = async function (todo) {
    //create a new mongoose object by using the new keyword

    var newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    });

    try {
        //Save the todo
        var savedTodo = await newTodo.save();
        return savedTodo;
    } catch (e) {
        throw Error('Error while Creating a Todo');
    }
};

//Async func to update a todo

exports.updateTodo = async function (todo) {
    var id = todo.id;

    try {
        //find the old todo object by ID

        var oldTodo = await ToDo.findById(id);
    } catch (e) {
        throw Error("Error occured while finding Todo : updateTodo()");
    }

    //if no old todo object exists return false

    if (!oldTodo) {
        return false;
    }

    console.log(oldTodo);

    //Edit the todo obj
    oldTodo.title = todo.title;
    oldTodo.description = todo.description;
    oldTodo.status = todo.status;

    console.log(oldTodo);

    try {
        var savedTodo = await oldTodo.save();
        return savedTodo;
    } catch (e) {
        throw Error("An error occured while updating the Todo");
    }
};

//Async function to delete a todo by id

exports.deleteTodo = async function (id) {

    try {
        var deleted = await ToDo.remove({
            _id: id
        });
        if (deleted.n === 0) {
            throw Error("Todo could not be deleted");
        }
        return deleted;
    } catch (e) {
        throw Error("Error occured while Deleting the Todo");
    }
};