var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var pager = require('./pager');

console.log(pager);

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res){
	res.sendFile('/index.html');
});

http.listen(3000, function(){
	console.log('listening at port 3000');
});

var currentSlide;
var nbrOfSlides;
var pages;
readPages();


function readPages(){
	pages = [];
	nbrOfSlides = 0;
	currentSlide = 0;

	var currentDir = __dirname + '/slides';
	fs.readdir(currentDir, function(err, dir){
		if(err) console.error(err);

		for(var i = 0; i < dir.length; i++){
			if(dir[i].indexOf('slide') > -1){ //contains()
				pages[nbrOfSlides++] = "slides/" + dir[i] + '/page.html';
			}
		}
	});
}

io.on('connection', function(socket){
	console.log("connected... " + socket.id);
	console.log(pages);
	socket.emit('page slide', pages[currentSlide]);

});

setInterval(changeSlide, 3500);
function changeSlide(){
	io.emit('page slide', pages[currentSlide++]);
	if(currentSlide == nbrOfSlides) currentSlide = 0;
}
