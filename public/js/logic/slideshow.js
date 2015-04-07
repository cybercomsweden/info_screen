var socket = io();

titleRight: $('#newsTitleRightA').text('Bajs');

var domHolder = new function(){

	var activeHolder = [];

	var ACTIVE = 'active';
	var NOT_ACTIVE = 'not-active';

	var holder = {
		a : {
			frame: $('#frameA'),
			container: $('#frameContainerA'),
			banner: $('#newsBannerA'),

			titleLeft: $('#newsTitleLeftA'),
			textLeft: $('#newsTextLeftA'),
			thumbnailLeft: $('#newsImageLeftA'),

			titleRight: $('#newsTitleRightA'),
			textRight: $('#newsTextRightA'),
			thumbnailRight: $('#newsImageRightA')
		},
		b : {
			frame: $('#frameB'),
			container: $('#frameContainerB'),
			banner: $('#newsBannerB'),

			titleLeft: $('#newsTitleLeftB'),
			textLeft: $('#newsTextLeftB'),
			thumbnailLeft: $('#newsImageLeftB'),

			titleRight: $('#newsTitleRightB'),
			textRight: $('#newsTextRightB'),
			thumbnailRight: $('#newsImageRightB')
		}
	}

	activeHolder[ACTIVE] = holder.a;
	activeHolder[NOT_ACTIVE] = holder.b;

	this.notifyNewActive = function(){
		var active = activeHolder[ACTIVE];
		var notActive = activeHolder[NOT_ACTIVE];
		activeHolder = [];
		activeHolder[ACTIVE] = notActive;
		activeHolder[NOT_ACTIVE] = active;
	}

	this.getFrame = function(sign){
		return activeHolder[sign].frame;
	}

	this.getContainer = function(sign){
		return activeHolder[sign].container;
	}
	this.getBanner = function(sign){
		return activeHolder[sign].banner;
	}

//Bryt ut funktioner!
	this.newSource = function(data, frame){
		if(frame){
			if(data === null){
				// CLEAR FRAME
				activeHolder[frame].frame.attr('src', '');
				return;
			}

			// FIRST TIME / SPECIFIC
			activeHolder[frame].frame.attr('src', data.page);
			activeHolder[frame].container.css("background-image", "url(" + data.profile.background + ")");

			activeHolder[frame].titleLeft.text(data.news[0].title);
			activeHolder[frame].textLeft.text(data.news[0].text);
			activeHolder[frame].thumbnailLeft.attr('src', data.news[0].thumbnail);

			activeHolder[frame].titleRight.text(data.news[1].title);
			activeHolder[frame].textRight.text(data.news[1].text);
			activeHolder[frame].thumbnailRight.attr('src', data.news[1].thumbnail);
			return;
		
		}
		// NEW CONTENT
		activeHolder[NOT_ACTIVE].container.css("background-image", "url(" + data.profile.background + ")");
		activeHolder[NOT_ACTIVE].frame.attr('src', data.page);

		activeHolder[NOT_ACTIVE].titleLeft.text(data.news[0].title);
		activeHolder[NOT_ACTIVE].textLeft.text(data.news[0].text);
		activeHolder[NOT_ACTIVE].thumbnailLeft.attr('src', data.news[0].thumbnail);

		activeHolder[NOT_ACTIVE].titleRight.text(data.news[1].title);
		activeHolder[NOT_ACTIVE].textRight.text(data.news[1].text);
		activeHolder[NOT_ACTIVE].thumbnailRight.attr('src', data.news[1].thumbnail);
	}
}


socket.on('connection', function(){console.log("connected")});

// function updateClock(timeData){
// 	io.emit('clock update', timeData);
//}

socket.on('clock update', function(clockData){
	$('#time').text(clockData.time);
	$('#date').text(clockData.date);
});

socket.on('next slide', function(data){
	var animLength = 2000;

	// DataChange, todo-time
	domHolder.newSource(data);

	// Colors & Profile
	console.log()
	$('#clock').animate({'background-color': data.profile.color}, animLength);
	$('#slidingNews').animate({'background-color': data.profile.color}, animLength);


	// SLIDES
	domHolder.getContainer('active')		.animate({'margin-left': '-=100%'}, animLength, 'easeInOutExpo');
	domHolder.getContainer('not-active')	.animate({'margin-left': '-=100%'}, animLength, 'easeInOutExpo',
		function(){
			domHolder.getContainer('not-active').css('margin-left', '100%');
			domHolder.newSource(null, 'not-active');
	});
	domHolder.notifyNewActive();

	// NEWS
	domHolder.getBanner('active')		.animate({'margin-left': '+=100%'}, animLength, 'easeInOutExpo');
	domHolder.getBanner('not-active')	.animate({'margin-left': '+=100%'}, animLength, 'easeInOutExpo',
		function (){
			domHolder.getBanner('not-active').css('margin-left', '-100%');
			// domHolder.newSource('', 'not-active'); utförs redan en gång
	});


});

socket.on('first slide', function(data){
	$('#clock').css('background-color', data.profile.color);
	$('#slidingNews').css('background-color', data.profile.color);
	domHolder.newSource(data, 'active');
});














