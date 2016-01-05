var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  req.session.destroy();
  res.render('index',{page:'index', type: 'guest', userId: ''});
});

module.exports = router;