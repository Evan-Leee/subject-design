'use strict';
var user = require('../models/user');


function LoginController() {

}

LoginController.prototype.verifyUser = function(req, res){
  req.session.userId = req.param('userId');

  user.findOne({id: req.param('userId'), password: req.param('password')})
      .then(function(data){
        if(data){
          req.session.type = data.type;

          res.send({isCorrect: true});
        }else{
          res.send({isCorrect: false});
        }
      });

};

module.exports = LoginController;