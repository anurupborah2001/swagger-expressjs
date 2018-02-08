'use strict'

var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
    AddTodo : AddTodoFunc
}

function AddTodoFunc(req,res){
    var start = monitor();
    client.create({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.todo.value.todo_id,
        body: req.swagger.params.todo.value 
    },function(err,response){
        res.header('Content-Type','application/json');
        if(err){
            res.statusCode = 409;
            res.end(JSON.stringify(err));
        }else{
            //res.statusCode = 200;
            req.swagger.params.todo.value.datecreated = new Date();
            console.log(`Todo ${req.swagger.params.todo.value.datecreated} added to Elastic Search`);
            res.end();
            monitor(start,"AddTodo");
        }  
    });
    
}

