module.exports = function(express, app){

	var root = __dirname.replace('/app', '').replace('/routes', '');

	app.use('/public', express.static(root + "/public"));

	app.get('/', function(req, res){
		res.sendFile(root + '/views/portal.html');
	});

	app.get('/slideshow', function(req, res){
		res.sendFile(root + '/views/slideshow.html');
	});

		app.get('/admin', function(req, res){
		res.sendFile(root + '/views/admin.html');
	});

}