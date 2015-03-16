var fs = require('fs');

//

var currentSlide = 0;
var nbrOfSlides = 0;
var pages = [];

//

readPages();

////////////////////////////

function readPages(){

	var currentDir = __dirname + '/slides';
	fs.readdir(currentDir, function(err, dir){
		if(err) console.error(err);

		for(var i = 0; i < dir.length; i++){
			if(dir[i].indexOf('slide') > -1){ //contains()
				pages[nbrOfSlides++] = "slides/" + dir[i] + '/page.html';
			}
			console.log("Pauge: " + pages);
		}
	});
}