var express = require('express');
var router = express.Router();
var LoginController = require('../../controllers/login-controller');
var login = new LoginController();

router.get('/', function(req,res){
  res.render('login', { page: 'login', type: req.session.type, userId: req.session.userId});
});

router.post('/verify',login.verifyUser);

module.exports = router;