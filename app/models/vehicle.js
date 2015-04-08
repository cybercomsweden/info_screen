    var mongoose = require('mongoose');

    module.exports = mongoose.model('Vehicle', {
        model : String,
        plate : String,
        color : String
    });