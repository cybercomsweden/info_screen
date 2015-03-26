var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var pager = require('./custom_modules/page_reader');
var resources = require('./custom_modules/resource_module');



app.use('/slideshow', express.static(__dirname + '/slideshow'));
// app.use('/', express.static(__dirname + '/'));
app.use('/pages', express.static(__dirname + '/pages'));

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
				color: resources.currentColor()
			}
		);
});

function emitNextSlide(){
	io.emit('page slide', {
			page: pager.nextSlideRef().path,
			news: resources.nextNews(),
			color: resources.nextColor()
		}
	);
}

http.listen(3000, function(){
	console.log('listening at port 3000');
});

// -- Do Stuff! --

pager.readPages(__dirname);
pager.readingDone = function(){
	// TODO ?
}

setInterval(emitNextSlide, 10000);
