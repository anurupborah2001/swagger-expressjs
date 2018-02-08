'use strict'

var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
    DeleteTodoById : DeleteTodoByIdFunc
}

function DeleteTodoByIdFunc(req,res){
    var start = monitor();
    console.log(`The ID to delete record ${req.swagger.params.id.value}`);
    client.delete({
        index : 'todo',
        type : 'todo',
        id : req.swagger.params.id.value
    },function(err,response){
        res.header('Content-Type','application/json');
        if(err){
           res.end(JSON.stringify(err));
        }else{
           res.end(JSON.stringify(response));
           monitor(start,"DeleteTodoById");
        }
    });
}