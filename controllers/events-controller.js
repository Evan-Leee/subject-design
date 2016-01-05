'use strict';

var events = require('../models/events');

function EventsController() {

}

EventsController.prototype.getContent = function (req, res) {
  events.find({})
      .then(function(data){
        res.send({events:data, type:req.session.type, userId:req.session.userId});
      })
};

module.exports = EventsController;