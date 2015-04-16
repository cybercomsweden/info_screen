function modelController(){

	var Background = require('./background');
	var Color = require('./color');
	var Contentpage = require('./contentpage');
	var Newspost = require('./newspost');

	this.getBackground = function(){
		return Background;
	}

	this.getColor = function(){
		return Color;
	}

	this.getContentpage = function(){
		return Contentpage;
	}

	this.getNewspost = function(){
		return Newspost;
	}
}

module.exports = new modelController();