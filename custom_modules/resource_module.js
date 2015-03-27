var profile = [
		{
			color: 'rgb(237, 123, 1)', //orange
			background: 'http://lorempixel.com/1920/1080/abstract'
		},
		{
			color: 'rgb(113, 49, 136)', // purple
			background: 'http://lorempixel.com/1920/1080/technics'
		},
		{
			color: 'rgb(1, 85, 153)', // blue
			background: 'http://lorempixel.com/1920/1080/nature'
		},
		{
			color: 'rgb(170, 179, 0)', //green
			background: 'http://lorempixel.com/1920/1080/animals'
		}
	];

var mockNews = [
		[{
			title: "Cybercom får ny Informations portal",
			text: "Niklas har under en tid utvecklat en portal som kommer revolutionera informationen på företaget!",
			thumbnail: "https://inside.cybercom.com/Global/N/niwel1/image/10352823_10152804657123385_8001097518317182270_n.jpg"
		},
		{
			title: "Octoberfest",
			text: "Förberedleserna inför årets Octoberfest har redan börjat. Vill du vara med och planera? Hör av dig till polisen nu!",
			thumbnail: "http://beerhold.it/600/600.jpg"
		}],
		[{
			title: "Design hjälper Cybercom in i framtiden",
			text: "Design har tagit fram koncept och förslag till storföretag som kommer kunna landa många kunder inom en snar framtid.",
			thumbnail: "https://inside.cybercom.com/Global/A/anben1/image/profilbild.jpg"
		},
		{
			title: "Innovation Labs får ett ansiktslyft",
			text: "Cybercoms Innovation Labs håller på att leva upp med Balthazar i tyglarna. Balthazar själv tror inte på teknik, men han tror på att hjälpa andra.",
			thumbnail: "https://inside.cybercom.com/Global/B/balan1/image/BalthazarLang240x300.jpg"
		}],	
		[{
			title: "När kommer ABW'n",
			text: "Den annonserade och numera efterlängtade ABW'n lyser med sin frånvaro, och inte nog med det. Ansvariges, Hanne, bild ser dum ut i insides kvadratiska profilbilder.",
			thumbnail: "https://inside.cybercom.com/Global/H/hapos1/image/Joblink%20bild%20Hanne.jpg"
		},
		{
			title: "Var glad på jobbet, men inte för glad",
			text: "Joakim Sällström inspirerar och muntrar upp sin omgivning, men frågan är om han är för glad. Studier pågår för att undersöka ev. negativa påverkan.",
			thumbnail: "https://inside.cybercom.com/Global/J/josl/image/josl.jpg"
		}]
	];

var currentProfile = 0;
var currentNews = 0;

exports.nextProfile = function(){
	if(++currentProfile == profile.length) currentProfile = 0;
	return profile[currentProfile];
}
exports.currentProfile = function(){
	return profile[currentProfile];
}


exports.nextNews = function(){
	if(++currentNews == mockNews.length) currentNews = 0;
	return mockNews[currentNews];
}
exports.currentNews = function(){
	return mockNews[currentNews];
}