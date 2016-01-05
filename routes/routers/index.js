var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  res.render('index', {page : 'index', type: req.session.type, userId: req.session.userId});
});

module.exports = router;