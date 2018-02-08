'use strict'

var client = require('../helpers/es');

module.exports = {
    FindTodoById : FindTodoByIdFunc
}

function FindTodoByIdFunc(req,res){
    console.log(`The ID to find record ${req.swagger.params.id.value}`);
    client.get({
        index : 'todo',
        type : 'todo',
        id : req.swagger.params.id.value
    },function(err,response){
        res.header('Content-Type','application/json');
        if(err){
            res.statusCode = 400;
            res.end(JSON.stringify(err));
        }else{
           res.end(JSON.stringify(response._source));
        }
    });
}

//check in git bash 
//curl http://localhost:10010/todo/1

//to nicely format
//curl http://localhost:10010/todo/1 | jq .