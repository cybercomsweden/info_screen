var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var pager = require('./custom_modules/page_reader');
var resources = require('./custom_modules/resource_module');
var clock = require('./custom_modules/clock');



app.use('/slideshow', express.static(__dirname + '/slideshow'));
// app.use('/', express.static(__dirname + '/'));
app.use('/pages', express.static(__dirname + '/pages'));
app.use('/backgrounds', express.static(__dirname + '/backgrounds'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/main/index.html');
});

app.get('/slideshow', function(req, res){
	res.sendFile(__dirname + '/slideshow/index.html');
});

io.on('connection', function(socket){
	console.log("connected... " + socket.id);
	socket.emit('first slide', {
				page: pager.currentSlideRef().path,
				news: resources.currentNews(),
				profile: resources.currentProfile()
			}
		);
});

function emitNextSlide(){
	io.emit('page slide', {
			page: pager.nextSlideRef().path,
			news: resources.nextNews(),
			profile: resources.nextProfile()
		}
	);
}

function updateClientClock(timeData){
	io.emit('clock update', timeData);
}

http.listen(3000, function(){
	console.log('listening at port 3000');
});

// -- Do Stuff! --
clock.startClock();
clock.setCallback(updateClientClock);
pager.readPages(__dirname);
pager.readingDone = function(){
	// TODO ?
}

setInterval(emitNextSlide, 3000);
