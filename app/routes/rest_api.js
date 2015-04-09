var Newspost = require('../models/newspost');
var Background = require('../models/background');

console.log("REST RUNNING [rest_api.js]");

module.exports = function(app){ // Kan brytas ut till en start klass och underklasser senare

////// NEWSPOSTS
    app.get('/api/newsposts', function(req, res) {
        Newspost.find(function(err, newsposts) {
            res.json(newsposts);
        });
    });

    app.post('/api/newsposts', function(req, res) {

            // req.body is available cause of bodyparser
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

    app.delete('/api/newsposts/:newspost_id', function(req, res) {
        Newspost.remove({
            _id : req.params.newspost_id
        }, function(err, newspost) {
            if (err)
                res.send(err);

            Newspost.find(function(err, newsposts) {
                if (err)
                    res.send(err)
                res.json(newsposts);
            });
        });
    });


////// BACKGROUNDS

    app.get('/api/backgrounds', function(req, res) {
        Background.find(function(err, backgrounds) {
            res.json(backgrounds);
        });
    });

    app.post('/api/backgrounds', function(req, res) {
        Background.create({
            title : req.body.title,
            imgRef : req.body.imgRef,
            colorTheme : req.body.colorTheme
        }, function(err, background) {
            if (err)
                res.send(err);

            Background.find(function(err, backgrounds) {
                if (err)
                    res.send(err)
                res.json(backgrounds);
            });
        });

    });

    app.delete('/api/backgrounds/:background_id', function(req, res) {
        Background.remove({
            _id : req.params.background_id
        }, function(err, background) {
            if (err)
                res.send(err);

            Background.find(function(err, backgrounds) {
                if (err)
                    res.send(err)
                res.json(backgrounds);
            });
        });
    });
}