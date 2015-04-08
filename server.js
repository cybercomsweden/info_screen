var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var database = require('./config/database');
var morgan          = require('morgan');             // log requests to the console (express4)
var bodyParser      = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)

mongoose.connect(database.url);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

require('./app/routes/middle')(express, app);
require('./app/routes/rest_api')(app);

require('./app/app_logic')(io);

http.listen(3000, function(){
	console.log('listening at port 3000');
});