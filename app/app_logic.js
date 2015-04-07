
module.exports = function(io){

	var pager = require('./page_reader');
	var resources = require('./resource_module');
	var clock = require('./clock');
	var root = __dirname.replace('/app', '');

	io.on('connection', function(socket){
		console.log("connected... " + socket.id);
		socket.emit('first slide', {
					page: pager.currentSlideRef().path,
					news: resources.currentNews(),
					profile: resources.currentProfile()
				}
			);
		socket.emit('clock update', clock.getTime());
	});

	function emitNextSlide(){
		io.emit('next slide', {
				page: pager.nextSlideRef().path,
				news: resources.nextNews(),
				profile: resources.nextProfile()
			}
		);
	}

	function updateClientClock(timeData){
		io.emit('clock update', timeData);
	}


	// -- Do Stuff! --
	clock.startClock();
	clock.setCallback(updateClientClock);
	pager.readPages(root);
	pager.readingDone = function(){
		// TODO ? callback
		
	}


	setInterval(emitNextSlide, 4000);

}