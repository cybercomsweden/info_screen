    var mongoose = require('mongoose');

    module.exports = mongoose.model('Contentpage', {
        title : String,
        category : String,
        colorTheme : String,
        pageRef : String
    });