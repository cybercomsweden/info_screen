var mc = require('../models/modelController');

var Newspost = mc.getNewspost();
var Background = mc.getBackground();
var Contentpage = mc.getContentpage();
var Color = mc.getColor();

// pages ---------------
var pageHolder = [];
var pageIndex = 0;
var pagesLength = 0;
// news ----------------
var newsHolder = [];
var newsIndexA = 0;
var newsIndexB = 1;
var newsLength = 0;
// colors --------------
var colorHolder = [];
var colorIndex = 0;
var colorLength = 0;
// background ----------
var backgroundHolder = [];
var backgroundIndex = 0;
var backgroundLength = 0;

// **EXPORTS =====================
exports.init = function(){ //construcotr
	initPages();
	initNewsposts();
	initColors();
	initBackgrounds();
}

exports.currentSlide = function(){
	return {
		page: currentPage().pageRef,
		news: currentNewspost(),
		color: currentColor(),
		background: currentBackground()
	}
}

exports.nextSlide = function(){
	return {
		page: nextPage().pageRef,
		news: nextNewspost(),
		color: nextColor(),
		background: nextBackground()
	}
}

// **PAGES =====================
function currentPage(){
	return pageHolder[pageIndex];
}

function nextPage(){
	pageIndex = ++pageIndex % pagesLength;
	return currentPage();
}

function initPages(){
	Contentpage.find(function(err, pages){
		for(i in pages){
			pageHolder.push(pages[i]);
		}
		pagesLength = pages.length;
	});
}

// **NEWS ======================
function currentNewspost(){
	return [newsHolder[newsIndexA],newsHolder[newsIndexB]];
}

function nextNewspost(){
	newsIndexA = (newsIndexA + 2) % newsLength;
	newsIndexB = (newsIndexB + 2) % newsLength;
	return currentNewspost();
}

function initNewsposts(){
	Newspost.find(function(err, newsposts){
		for(i in newsposts){
			newsHolder.push(newsposts[i]);
		}
		newsLength = newsposts.length;
	});
}

// **COLOR =====================
function currentColor(){
	return colorHolder[colorIndex];
}

function nextColor(){
	colorIndex = ++colorIndex % colorLength;
	return currentColor();
}

function initColors(){
	Color.find(function(err, colors){
		for(i in colors){
			colorHolder.push(colors[i]);
		}
		colorLength = colors.length;
	});
}

// **BACKGROUNDS ================
function currentBackground(){
	return backgroundHolder[backgroundIndex];
}

function nextBackground(){
	backgroundIndex = ++backgroundIndex % backgroundLength;
	return currentBackground();
}

function initBackgrounds(){
	Background.find(function(err, backgrounds){
		for(i in backgrounds){
			backgroundHolder.push(backgrounds[i]);
		}
		backgroundLength = backgrounds.length;
	});
}





