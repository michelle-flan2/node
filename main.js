var http = require("http");

http.createServer(function (request, response) {
 // Send the HTTP header
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/plain'});

 // Send the response body as "Hello World"
 response.end('Welcome to Data Rep\n');
}).listen(8081);

var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send('Hello World');
})
var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})


