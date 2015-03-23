var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var pager = require('./custom_modules/dir_reader');

pager.readingDone = function(){

	// var pages = pager.getPageHolder();
	// console.log(pages);
	// for(var category in pages){
	// 	var container = pages[category];
	// 	console.log(category);
	// 	var conPages = container.pages;
	// 	console.log(conPages);
		// for(var j = 0; j < container.pages.length; j++){
		// 	console.log(container.pages[j]);
		// }
	// }
}

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
	socket.emit('first slide', pager.currentSlideRef().path);
});

function emitNextSlide(){
	io.emit('page slide', pager.nextSlideRef().path);
}

http.listen(3000, function(){
	console.log('listening at port 3000');
});

// -- Do Stuff! --

pager.readPages(__dirname);

setInterval(emitNextSlide, 10000);
