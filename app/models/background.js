    var mongoose = require('mongoose');

    module.exports = mongoose.model('Background', {
        title : String,
        colorTheme : String,
        imgRef : String
    });