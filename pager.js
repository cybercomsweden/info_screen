var fs = require('fs');

// ------- Constructor

var currentSlide = 0;
var nbrOfSlides = 0;
var pages = [];

readPages();

// -------

function readPages(){

	var currentDir = __dirname + '/slides';
	fs.readdir(currentDir, function(err, dir){
		if(err) console.error(err);

		console.log("Pages Available:");
		for(var i = 0; i < dir.length; i++){
			if(dir[i].indexOf('slide') > -1){ //contains()
				pages[nbrOfSlides++] = "slides/" + dir[i] + '/page.html';
				console.log("{ " + pages[ nbrOfSlides - 1] + " }");
			}
		}
	});
}

exports.currentSlide = function(){
	return pages[currentSlide]
}

exports.nextSlide = function(){
	if(++currentSlide == nbrOfSlides) currentSlide = 0;
	console.log("Slide [" + currentSlide +"]");
	var slide = pages[currentSlide];
	return slide;
}