var mongoose = require ('mongoose');

var LocationSchema = new mongoose.Schema({
    name : String
})

mongoose.model('Location', LocationSchema)
