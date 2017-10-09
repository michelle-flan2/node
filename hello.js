var express = require('express');
var app = express();
var path = require('path');

app.get('/Hello', function (req, res) {
 res.send('Hello');
})
app.get('/hello/:name', function (req, res) {
	console.log(req.params.name);
 res.send('hello' + req.params.name);
})

app.get('/test', function (req, res) {
	console.log("file.io");
 res.sendFile(path.join(__dirname + '/index.html'));
})
var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})
