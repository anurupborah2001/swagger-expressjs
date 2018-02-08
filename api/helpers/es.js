'use strict'

var ElasticSearch = require('elasticsearch');
var client = new ElasticSearch.Client({
   host: 'localhost:9200',
   log: 'trace' //trace,error
});


client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

//Elastic Search and Node JS tutorial
//-------------------------------------------
//https://github.com/compose-ex/petitioneering
//https://www.compose.com/articles/getting-started-with-elasticsearch-and-node/
////https://blog.raananweber.com/2015/11/24/simple-autocomplete-with-elasticsearch-and-node-js/

//create Indices
//client.indices.create({  
//  index: 'gov'
//},function(err,resp,status) {
//  if(err) {
//    console.log(err);
//  }
//  else {
//    console.log("create",resp);
//  }
//});
//create { acknowledged: true }  


///Delete Indices
//client.indices.delete({index: 'gov'},function(err,resp,status) {  
//  console.log("delete",resp);
//});
//delete { acknowledged: true } 
//client.delete({  
//  index: 'gov',
//  id: '1',
//  type: 'constituencies'
//},function(err,resp,status) {
//    console.log(resp);
//});


//Bulk import
//var myBody = { index: {_index: 'gov', _type: 'constituencies', _id: '1' } },  
//{
//  "ConstituencyName": "Ipswich",
//  "ConstituencyID": "E14000761",
//  "ConstituencyType": "Borough"
//};
//client.bulk({  
//  index: 'gov',
//  type: 'constituencies',
//  body: myBody
//};

//In Elasticsearch, an index is a place to store related documents. We're going to create an index called 'gov', and we're going to use it to store two types of documents - 'constituencies' and 'petitions'. The act of storing those documents in an index is known as indexing. 
//we just need some documents to go in it. We're going to be using two datasets for our index: one contains information about parliamentary constituencies, the other contains actual the petitions data. We'll start with the constituencies data because it's smaller and less complex.
//client.index({  
//  index: 'gov',
//  id: '1',
//  type: 'constituencies',
//  body: {
//    "ConstituencyName": "Ipswich",
//    "ConstituencyID": "E14000761",
//    "ConstituencyType": "Borough",
//    "Electorate": 74499,
//    "ValidVotes": 48694,
//  }
//},function(err,resp,status) {
//    console.log(resp);
//});

// how many documents there are in our index. 
//client.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
//  console.log("constituencies",resp);
//});

module.exports = client;