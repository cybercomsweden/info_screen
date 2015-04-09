    var mongoose = require('mongoose');

    module.exports = mongoose.model('ContentPage', {
        title : String,
        category : String,
        colorTheme : String,
        pageRef : String
    });