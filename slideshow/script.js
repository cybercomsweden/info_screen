var socket = io();
var frames = new function(){

	var frameHolder = [];

	var ACTIVE = 'active';
	var NOT_ACTIVE = 'not-active';

	var holder = {
		a : $('#frameA'),
		b : $('#frameB'),
		cA: $('#containerB'),
		cB: $('#containerA')
	}

	frameHolder[ACTIVE] = holder.a;
	frameHolder[NOT_ACTIVE] = holder.b;

	this.notifyNewActive = function(){
		console.log("New Active");
		var active = frameHolder[ACTIVE];
		var notActive = frameHolder[NOT_ACTIVE];
		frameHolder = [];
		frameHolder[ACTIVE] = notActive;
		frameHolder[NOT_ACTIVE] = active;
	}

	this.getFrame = function(sign){
		return frameHolder[sign];
	}

	this.newSource = function(source, frame){
		if(frame){
			frameHolder[frame].attr('src', source);
			return;
		}
		frameHolder[NOT_ACTIVE].attr('src', source);
	}
}


socket.on('connection', function(){console.log("connected")});


socket.on('page slide', function(page){
	frames.newSource(page);

	frames.getFrame('active')		.animate({'margin-left': '-=100%'}, 2000, 'easeInOutExpo');
	frames.getFrame('not-active')	.animate({'margin-left': '-=100%'}, 2000, 'easeInOutExpo', function(){
		frames.getFrame('not-active').css('margin-left', '100%');
		frames.newSource('', 'not-active');
	});
	frames.notifyNewActive();

});

socket.on('first slide', function(page){
	frames.newSource(page, 'active');
});
