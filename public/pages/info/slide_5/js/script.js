console.log("I am the lunch slide");


// Lägg till öppettider och extra på de som saknas

$(document).ready(function(){
  var target = $('#target');

  var sumOfRestaurants = 3;
  var restaurantsRead = 0;
  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var lunches = {Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []};
  var today = new Date().getDay() - 1; // 0 = monday

  // STEREO
  $.ajax({
  	url: 'http://stereo-malmo.se/veckans-lunch/', type: 'GET',
  	success: function(res) {
  		var rootDiv = $(res.responseText).find('.entry-content');

  		var extrasP = rootDiv.find('p').first().html();
  		var splits = extrasP.split('<br>');
  		var openText = splits[1].split("&nbsp;&nbsp;&nbsp")[0].substring(1);
  		var discountText = splits[2].substring(1);

  		var weekLunches = rootDiv.find('ul');
  		for(var i = 0; i < weekLunches.length; i++){
  			var stereoToday = {id: "rest_stereo", restaurant: "Stereo", courses: [], extra: discountText, open: openText};
  			var todayLunches = $(weekLunches[i]).find('li');
  			for(var j = 0; j < todayLunches.length; j++){
  				stereoToday.courses.push($(todayLunches[j]).text());
  			}
  		lunches[weekdays[i]].push(stereoToday);
  		}
  		finishedReading();
  	}
  });

  // AKVARIET
  $.ajax({
  	url: 'http://akvariet-malmo.se/dagens-lunch/', type: 'GET',
  	success: function(res) {
  		var div = $(res.responseText).find('.entrytext');
  		var price = div.find('h1').first().html();
  		var openText = div.find('h4').first().html();
  		var pLunches = div.children('table').find('p');
  		
  		for(var i = 0; i < 5; i++){
  			var akvarietToday = {id: "rest_akvariet", restaurant: "Akvariet", courses: [], extra: price, open: openText};
  			var lunch = $(pLunches[i]).html().split('<br>')[1];
  			akvarietToday.courses.push(lunch);
  			lunches[weekdays[i]].push(akvarietToday);
  		}
  		finishedReading();
  	}
  });

   // P2
  $.ajax({
  	url: 'http://restaurangp2.se/lunch', type: 'GET',
  	success: function(res) {
  		console.log("P2");
  		var root = $(res.responseText).find('.main_content_menu');
  		var extraInfo = root.find('.top_info').find('p').eq(1).text();

  		for(var i = 0; i < weekdays.length ; i++){
  			var p2today = {id: "rest_ptwo", restaurant: "P2", courses: [], extra: extraInfo};
  			var dayDiv = root.find('#'+ weekdays[i].toLowerCase());
  			var dishes = dayDiv.children('table').children('tbody').children('tr'); // Idioterna har bakat ihop sina divvar!
  			for(var j = 0; j < dishes.length; j++){
  				var dish = dishes.eq(j).find('td').eq(1).text();
  				console.log("dish: " + dish);
  				p2today.courses.push(dish);
  			}
  			lunches[weekdays[i]].push(p2today);  			
  		}

  		finishedReading();
  	}
  });


  function HtmlDecode(html) {
    	var div = document.createElement("div");
    	div.innerHTML = html;
    	return div.childNodes[0].nodeValue;
	}

  function finishedReading(){
  	if(++restaurantsRead == sumOfRestaurants){
  			printMenus();
  		}
  }

  function printMenus(){
  	$('#title-weekday').append(weekdays[today]);
  	var todaysLunches = lunches[weekdays[today]];
  	for(i in todaysLunches){

  		var restMenu = todaysLunches[i];
  		target.append("<h2>"+restMenu.restaurant+"</h2>");
  		if(restMenu.open)
  			target.append("<p>"+restMenu.open+"</p>");
  		if(restMenu.extra)
  			target.append("<p>"+restMenu.extra+"</p>");
  		target.append('<ul id="'+restMenu.id+'"></ul>');
  		var menuList = $('#'+restMenu.id);
  		var courses = restMenu.courses;
  		for(j in courses){
  			menuList.append('<li>'+HtmlDecode(courses[j])+'</li>');
  		}
  	}
  }

});