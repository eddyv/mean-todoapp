//Accessing the todo services

var TodoService = require('../services/todo.service');

//saving this instance in a var

var _this = this;

// async controller function to get the todolist

exports.getTodos = async function (req, res, next) {
    // check the existance of query parameters. Set default if not

    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var todos = await TodoService.getTodos({}, page, limit);

        return res.status(200).json({
            status: 200,
            data: todos,
            message: "Successfully Recieved Todos"
        });

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
};

exports.createTodo = async function (req, res, next) {
    //Req.body contains the form submit vals

    var todo = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    };

    try {
        //calling service function with the new obj from body

        var createdTodo = await TodoService.createTodo(todo);
        return res.status(201).json({
            status: 201,
            data: createdTodo,
            message: "Successfully Created Todo"
        });
    } catch (e) {
        //return error message with code and err msg

        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
};

exports.updateTodo = async function (req, res, next) {

    // Id is necessary for the update

    if (!req.body._id) {
        return res.status(400).json({
            status: 400.,
            message: "Id must be present"
        });
    }

    var id = req.body._id;

    console.log(req.body);

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    };

    try {
        var updatedTodo = await TodoService.updateTodo(todo);
        return res.status(200).json({
            status: 200,
            data: updatedTodo,
            message: "Succesfully Updated Todo"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400.,
            message: e.message
        });
    }
};

exports.removeTodo = async function (req, res, next) {

    var id = req.params.id;

    try {
        var deleted = await TodoService.deleteTodo(id);
        return res.status(204).json({
            status: 204,
            data: deleted,
            message: "Succesfully Removed Todo"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }

};