var express = require('express');
var router = express.Router();

var MessageController = require('../../controllers/message-controller');
var message = new MessageController();

router.get('/',message.getMessage);
router.post('/add',message.addMessage);


module.exports = router;
