var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

require('./app/routes/middle')(express, app);

require('./app/app_logic')(io);

http.listen(3000, function(){
	console.log('listening at port 3000');
});