var express = require('express');
var router = express.Router();
var EventsController = require('../../controllers/events-controller');
var events = new EventsController();

router.get('/', function(req, res){
  res.render('events', {page:'events',type: req.session.type, userId: req.session.userId})
});

router.get('/content',events.getContent);

module.exports = router;