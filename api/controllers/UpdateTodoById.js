'use strict'

var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
    UpdateTodoById : UpdateTodoByIdFunc
}

function UpdateTodoByIdFunc(req,res){
    var start = monitor();
    console.log(`The ID to update record ${req.swagger.params.id.value}`);
    client.update({
        index : 'todo',
        type : 'todo',
        id : req.swagger.params.id.value,
        body : {
            doc : req.swagger.params.todo_body.value
        }
    },function(err,response){
        res.header('Content-Type','application/json');
        if(err){
            res.statusCode = 400;
            res.end(JSON.stringify(err));
        }else{
           res.end();
           monitor(start,"UpdateTodoById");
        }
    });
}