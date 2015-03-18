var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var pager = require('./pager');

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res){
	res.sendFile('/index.html');
});

http.listen(3000, function(){
	console.log('listening at port 3000');
});

io.on('connection', function(socket){
	console.log("connected... " + socket.id);
	socket.emit('first slide', pager.currentSlide());
});

function emitNextSlide(){
	io.emit('page slide', pager.nextSlide());
}

// -- Do Stuff! --

setInterval(emitNextSlide, 5000);
