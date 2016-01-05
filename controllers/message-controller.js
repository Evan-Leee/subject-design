'use strict';
var user = require('../models/user');

function MessageController() {

}

MessageController.prototype.getMessage = function (req, res) {
  user.findOne({id: req.session.userId})
      .then(function (data) {
        res.render('message',
          {
            page: 'message',
            type: req.session.type,
            userId: req.session.userId,
            data: data
          });
      })
};

MessageController.prototype.addMessage = function(req, res){
  user.findOne({id: req.param('id')})
      .then(function(data){
        data.message.push(req.param('message'));
        data.save(function(err){
          if(err){
            console.log(err);
          }else {
            res.send(200);
          }
        });

      });

};

module.exports = MessageController;