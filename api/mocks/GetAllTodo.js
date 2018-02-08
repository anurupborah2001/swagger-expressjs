'use strict'

module.exports = {
    GetAllTodo : GetAllTodoFunc
}

function GetAllTodoFunc(req,res,next){
    return res.json([
        {
        todo_id: 0,	
        todo : "Get some books",
        datecreated: "2018-01-02T23:15:00.000Z",
        author:	"Anurup",
        duedate: "2018-03-06T23:15:00.000Z",	
        completed: true
        },
        {
        todo_id: 1,	
        todo : "Get some water",
        datecreated: "2017-05-02T23:15:00.000Z",
        author:	"Anupam",
        duedate: "2017-11-11T23:15:00.000Z",	
        completed: false
        }
    ]);
}