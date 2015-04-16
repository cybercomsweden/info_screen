 var timeHolder;
 var callback;
 var weekdays = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
 var months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

 var timeString;
 var dateString;

 function time(){
    timeString = "";
    dateString = "";

 	var now =new Date();
    var h=now.getHours();
    var m=now.getMinutes();
    h = checkTime(h);
    m = checkTime(m);

    var wDay = now.getDay();
    var mDay = now.getDate();
    var month = now.getMonth();

    var timeString = ""+ h + ":" + m;
    var dateString = ""+ weekdays[wDay] + " " + mDay + ", " + months[month];

    return {time: timeString, date: dateString};
 	}

function timeLoop(){
    var timeData = time();
    if(callback){callback()}

    timeHolder = setTimeout(function(){ time() },20000); //every 20 seconds

}

 function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
	}

exports.startClock = function(){
	timeHolder = setTimeout(function(){ time() },500);
}

exports.stopClock = function(){
	clearTimeout(timeHolder);
}

exports.setCallback = function(cb){
	callback = cb;
}

exports.getTime = function(){
    
    return time();
};

