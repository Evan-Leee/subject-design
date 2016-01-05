'use strict';

var user = require('../models/user');

function UserController() {

}

UserController.prototype.getStudent = function (req, res) {
  user.find({type: 'stu'})
      .then(function(data){
        res.send({data:data, type: req.session.type, userId: req.session.userId});
      })
};

UserController.prototype.addUser = function (req, res) {
  user.create({
    id: req.param('Id'), password: req.param('psd'), type: req.param('type'),
    info:  {
      name: req.param('name'),
      klass: parseInt(req.param('klass')),
      phoneNumber: parseInt(req.param('phone')),
      address: req.param('address')
    },
    message: []
  },function(err){
    if(err){
      console.log(err)
      return
    }
    res.send({isAdd: true})
  })

};

UserController.prototype.deleteUser = function (req, res) {
  console.log(req.param('userId'))
  user.remove({id: req.param('userId')},function(err){
    if(err){
      console.log(err);
      return
    }
    res.send({isDelete: true})
  })
};

module.exports = UserController;

