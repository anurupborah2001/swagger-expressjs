'use strict'

var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
    GetAllTodo : GetAllTodoFunc
}

function GetAllTodoFunc(req,res){
    var start = monitor();
    client.search({
        index : 'todo',
        type : 'todo',
        q: '*',
        _sourceInclude : 'todo_id, todo, datecreated, author, duedate',
    },function(error,result){
        if(error){
           res.end(JSON.stringify(error));
        }else{
            var results1 = []
            results1 =  result.hits.hits.map(function(hit){ return hit._source });
            res.header('Content-Type','application/json');
            res.end(JSON.stringify(results1));
            monitor(start,"GetAllTodo");
        }
    });
//    return res.json([
//        {
//        todo_id: 0,	
//        todo : "Get some books",
//        datecreated: "2018-01-02T23:15:00.000Z",
//        author:	"Anurup",
//        duedate: "2018-03-06T23:15:00.000Z",	
//        completed: true
//        },
//        {
//        todo_id: 1,	
//        todo : "Get some water",
//        datecreated: "2017-05-02T23:15:00.000Z",
//        author:	"Anupam",
//        duedate: "2017-11-11T23:15:00.000Z",	
//        completed: false
//        }
//    ]);
}