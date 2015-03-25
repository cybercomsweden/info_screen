var fs = require('fs');

// ------- Constructor

var currentSlide = 0;
var holder = [];
var slideshow = [];
var NbrOfPages = 0;
var NbrOfFilesRead = 0;

// -------

exports.callback;

function readingDone(){
	console.log('(' + NbrOfPages + ') Pages read.');

	//add all slides to slideshow
	if(exports.readingDone != null)
		exports.readingDone();
	for(category in holder){
		var container = holder[category];
		for(i in container.pages){
			slideshow.push(container.pages[i]);
		}
	}
}

exports.readPages = function(root){
	if(exports.callback != null){
		exports.callback('Reading Pages');
	}
	var absPath = root + "/pages";
	fs.readdir(absPath, function(err, dir){
		for(var i = 0; i < dir.length; i++){
			if(dir[i].charAt(0) != '.'){
				var folder = dir[i];
				readDir(absPath + "/" + folder, folder);
			}
		}
	});

}

function readDir(absPath, category){
	fs.readdir(absPath, function(err, dir){
		if(err) console.error(err);
		for(var i = 0; i < dir.length; i++){
			if(dir[i].indexOf('slide') > -1){
				NbrOfPages++;
				var absPagePath = absPath + "/" + dir[i] + '/page.html';
				var pageContainer;
				if(holder[category] != null){
					pageContainer = holder[category];
				} else {
					pageContainer = {category: category, pages: []};
					holder[category] = (pageContainer);
				}
				createPageObject(absPagePath, category);
			}
		}
	});
}

function createPageObject(ref, category){

	fs.readFile(ref, function(err, data){
		if(err) return;

		NbrOfFilesRead++;

		var relPath = ref.substr(ref.indexOf("/pages/"));
		pageObject = {path: relPath};
		pageObject.category = category;

		var lines = data.toString().split('\n');

		for(var i = 0; i < lines.length; i++){
			var line = lines[i];
			if(line.indexOf('<meta') > -1){
				if(line.indexOf('data-') > -1){

					var values = {}, vals, re = /data-(\S+)="(.*?)"/g;
					while (vals = re.exec(line)) {
						var key = vals[1];
						var value;
							if(/^\d+$/.test(value)){
								value = vals[2];
							} else {
								value = +vals[2];
							}
						values[key] = value;
						}

					}
					pageObject.extra = values; // TODO, testa en rad upp
				}
			if(line.indexOf('<title>') > -1){
				var re = /<title>(.+)</g;
				var titleResult = re.exec(line);
				pageObject.title = titleResult[1];
			}
		}
		holder[category].pages.push(pageObject);

		if(NbrOfPages == NbrOfFilesRead)
			readingDone()
	});
}

exports.currentSlideRef = function(){
<<<<<<< HEAD:custom_modules/page_reader.js
	return slideshow[currentSlide]
=======
	return slideShow[currentSlide]
>>>>>>> 67d6dea9f350a78f1a1c7c37fc1c6d4c0d3144d0:custom_modules/page_reader.js
}

exports.nextSlideRef = function(){
	if(++currentSlide == NbrOfPages) currentSlide = 0; // TODO
	console.log("[Next Slide] Slide (" + currentSlide + ")");
<<<<<<< HEAD:custom_modules/page_reader.js
	return slideshow[currentSlide];
=======
	return slideShow[currentSlide];
>>>>>>> 67d6dea9f350a78f1a1c7c37fc1c6d4c0d3144d0:custom_modules/page_reader.js
}

exports.getPageHolder = function(){
	return holder;
}











