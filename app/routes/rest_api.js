var Kvp = require('../models/kvp');
var Vehicle = require('../models/vehicle');
var Newspost = require('../models/newspost');

console.log("REST RUNNING [rest_api.js]");

module.exports = function(app){

	app.get('/api/kvps', function(req, res) {
        // use mongoose to get all todos in the database
        Kvp.find(function(err, kvps) {
            if (err){ console.log("err"); res.send(err) }

            res.json(kvps); // return all todos in JSON format
        });
    });

    app.post('/api/kvps', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Kvp.create({
            key : req.body.key,
            value : req.body.value
        }, function(err, kvp) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Kvp.find(function(err, kvps) {
                if (err)
                    res.send(err)
                res.json(kvps);
            });
        });

    });


    ////// VEHICLES

    app.get('/api/vehicles', function(req, res) {
        // use mongoose to get all todos in the database
        Vehicle.find(function(err, vehicles) {
            
            res.json(vehicles); // return all todos in JSON format
        });
    });

    app.post('/api/vehicles', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Vehicle.create({
            model : req.body.model,
            plate : req.body.plate,
            color : req.body.color
        }, function(err, vehicle) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Vehicle.find(function(err, vehicles) {
                if (err)
                    res.send(err)
                res.json(vehicles);
            });
        });

    });


////// NEWSPOSTS

    app.get('/api/newsposts', function(req, res) {
        // use mongoose to get all todos in the database
        Newspost.find(function(err, newsposts) {
            
            res.json(newsposts); // return all todos in JSON format
        });
    });

    app.post('/api/newsposts', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Newspost.create({
            title : req.body.title,
            author : req.body.author,
            text : req.body.text,
            imgRef : req.body.imgRef
        }, function(err, newspost) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Newspost.find(function(err, newsposts) {
                if (err)
                    res.send(err)
                res.json(newsposts);
            });
        });

    });
}