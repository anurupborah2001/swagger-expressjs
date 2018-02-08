'use strict'
//Monitoring JS helps in monitoring the timing of the API - it tracks the performance of the API and can be stored in the elastic search 
//to track it in Kibana
//We can use this to check the performance of the API Server
var client = require('../helpers/es');

var monitor = function(startTime,tag){
    if(startTime){
        var endTime = process.hrtime(startTime);
        //convert to milliseconds
        var duration = parseInt((endTime[0] * 1000) + (endTime[1]/1000000));
        //If need to access the console only for Development
        if(process.env.NODE_ENV == 'development'){
            console.log(`Duration for ${tag} : ${duration} msec`);
        }
        client.create({
            index: 'monitoring',
            type: 'todo-api',
            id: new Date().getTime(),
            body: { 'duration' : duration , 'tag' : tag } 
        });
    }else{
        return process.hrtime();
    }
}

module.exports = monitor;