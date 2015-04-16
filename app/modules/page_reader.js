var fs = require('fs');
var mc = require('../models/modelController');
var ContentPage = mc.getContentpage();
var mongoose = require('mongoose');

mongoose.connection.collections['contentpages'].drop();

var holder = [];
var NbrOfPages = 0;
var NbrOfFilesRead = 0;

// -------

function readingDone(){
	console.log('(' + NbrOfPages + ') Pages read.');
	if(exports.readingDone != null)
		exports.readingDone();
}

exports.readPages = function(root){
	var absPath = root + "/public/pages";
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
			if(dir[i].indexOf('.DS_Store') > -1){
				// MAC OS X file
			}
			else {
				NbrOfPages++;
				var absPagePath = absPath + "/" + dir[i] + '/index.html';
				createPageObject(absPagePath, category);
			}
		}
	});
}

function createPageObject(ref, category){

	fs.readFile(ref, function(err, data){
		if(err) return;

		NbrOfFilesRead++;

		var relPath = ref.substr(ref.indexOf("/info_screen") + 13); // remove path until after info_screen
		pageObject = {path: relPath};
		pageObject.category = category;

		var lines = data.toString().split('\n');

		for(var i = 0; i < lines.length; i++){
			var line = lines[i];

			if(line.indexOf('<title>') > -1){
				var re = /<title>(.+)</g;
				var titleResult = re.exec(line);
				pageObject.title = titleResult[1];
			}
		}

		// Add to mongoDB
		ContentPage.create({
			title : titleResult[1],
	        category : category,
	        colorTheme : "unassigned",
	        pageRef : relPath
		});
		if(NbrOfPages == NbrOfFilesRead)
			readingDone()
	});
}