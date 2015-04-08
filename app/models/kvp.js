    var mongoose = require('mongoose');

    module.exports = mongoose.model('Kvp', {
        key : String,
        value : String
    });