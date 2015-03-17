var socket = io();
	socket.on('new slide', function(msg){
		// console.log(msg);
		$('#i').text(msg);
	});

	socket.on('connection', function(){console.log("connected")});

	socket.on('page', function(page){
		$('#useMe').empty();
		$('#useMe').append(page);
	});

		socket.on('page slide', function(page){
			console.log("page: " + page);
		$('#frame').attr('src', page);
	});
