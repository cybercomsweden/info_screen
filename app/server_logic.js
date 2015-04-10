module.exports = function(io){

	var pager = require('./page_reader');
	var clock = require('./clock');
	var root = __dirname.replace('/app', '');
	var feed = require('./slide_feeder');

	function emitNextSlide(){
		io.emit('next slide', feed.nextSlide());
	}

	function updateClientClock(timeData){
		io.emit('clock update', timeData);
	}

	io.on('connection', function(socket){
		console.log("connected... " + socket.id);

		socket.emit('first slide', feed.currentSlide());

		socket.emit('clock update', clock.getTime());

	});

	clock.startClock();
	clock.setCallback(updateClientClock);
	pager.readPages(root);
	pager.readingDone = function(){
		setTimeout(feed.init, 300); // Mongo is too slow!

	setInterval(emitNextSlide, 13000);
	// -- Do Stuff! --
		// No connection allowed until set up!
	}



}