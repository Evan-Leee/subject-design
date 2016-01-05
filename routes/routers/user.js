var express = require('express');
var router = express.Router();
var UserController = require('../../controllers/user-controller');
var user = new UserController();

router.get('/',user.getStudent);

router.post('/add', user.addUser);

router.post('/delete', user.deleteUser);

module.exports = router;