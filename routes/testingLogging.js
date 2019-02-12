//var myLogModule = require('./Log');

//myLogModule.info('Node.js started Ritesh');

//-------
//var person = require('./data.js');
//console.log(person.firstName + ' ' + person.lastName);
//----------
//var myLogModuleElastic = require('/elasticS.js');
//console.log("In testingLogging.js");
//----------
var http = require('http');

var server = http.createServer(function(req, res){

console.log("Ritesh Http request testingLogging");

});

server.listen(8080); 
//----------
/*function Display(x) { 
    console.log(x);
}

Display(200);
*/
//-------

/*var obj = {
    authorName: 'Ryan Dahl',
    language: 'Node.js'
}

 console.log(obj);*/
 //----