var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventsSchema = new Schema ({
  title: String,
  created: String
});

module.exports = mongoose.model('Events', eventsSchema);