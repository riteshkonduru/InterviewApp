console.log("Hello World");

var elasticsearch = require('./elasticS.js');
var http = require('http');
elasticsearch.ping(http.get({
        path: '/'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
// Data received, let us parse it using JSON!
            var parsed = JSON.parse(body);
            callback({
                userDetail: parsed.name,
                userId: parsed.Id
            });
        });
    }));
//console.log(elasticsearch.testFunc );

console.log(" after loding elasticsearch");




