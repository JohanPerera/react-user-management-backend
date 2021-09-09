var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    address: String,
    phonenumber: String,
    sex: String
})

module.exports = mongoose.model('User', userSchema);