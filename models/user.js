var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: String,
  password: String,
  type: String,
  info: {
    name: String,
    klass: Number,
    phoneNumber: Number,
    address: String
  },
  message: Array
});

module.exports = mongoose.model('User', userSchema);