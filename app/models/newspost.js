    var mongoose = require('mongoose');

    module.exports = mongoose.model('Newspost', {
        title : String,
        author : String,
        imgRef : String,
        text : String
    });