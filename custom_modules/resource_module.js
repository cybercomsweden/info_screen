
var colors = [
		'rgb(237, 123, 1)', //orange
		'rgb(113, 49, 136)', // purple
		'rgb(1, 85, 153)', // blue
		'rgb(170, 179, 0)' //green
	];

var mockNews = [
		[{
			title: "I am the first news post",
			text: "I have a lot of important things to say. Things will be amazing because of my efforts!",
			thumbnail: "http://beerhold.it/100/100"
		},
		{
			title: "I am the second news post",
			text: "I have a lot of important things to say. Things will be amazing because of my efforts!",
			thumbnail: "http://beerhold.it/200/200"
		}],
		[{
			title: "I am the third news post",
			text: "I have a lot of important things to say. Things will be amazing because of my efforts!",
			thumbnail: "http://beerhold.it/300/300"
		},
		{
			title: "I am the fourth news post",
			text: "I have a lot of important things to say. Things will be amazing because of my efforts!",
			thumbnail: "http://beerhold.it/400/400"
		}],	
		[{
			title: "I am the fifth news post",
			text: "I have a lot of important things to say. Things will be amazing because of my efforts!",
			thumbnail: "http://beerhold.it/500/500"
		},
		{
			title: "I am the sixth news post",
			text: "I have a lot of important things to say. Things will be amazing because of my efforts!",
			thumbnail: "http://beerhold.it/600/600"
		}]
	];

// console.log("here comes stuff");
// console.log(mockNews[0][0]);
// console.log(mockNews[0][1]);
// console.log(mockNews[1][0]);
// console.log(mockNews[1][1]);
// console.log(mockNews[2][0]);
// console.log(mockNews[2][1]);

var currentColor = 0;
var currentNews = 0;

exports.nextColor = function(){
	if(++currentColor == colors.length) currentColor = 0;
	return colors[currentColor];
}
exports.currentColor = function(){
	return colors[currentColor];
}


exports.nextNews = function(){
	if(++currentNews == mockNews.length) currentNews = 0;
	return mockNews[currentNews];
}
exports.currentNews = function(){
	return mockNews[currentNews];
}