var user = require('../models/user');

function ProfileController() {

}

ProfileController.prototype.getProfile = function (req, res) {
  var userId = req.session.userId;
  user.findOne({id: userId})
      .then(function (data) {
        res.render('profile', {
          page: 'profile',
          type: req.session.type,
          userId: req.session.userId,
          info: data.info
        })
      });
};

ProfileController.prototype.modifyInfo = function (req, res) {
  var userId = req.session.userId;

  user.findOne({id: userId})
      .then(function (data) {
        data.info.name = req.param('userName');
        data.info.klass = parseInt(req.param('userClass'));
        data.info.phoneNumber = req.param('userPhone');
        data.info.address = req.param('userAddress');
        data.save(function(err){
          console.log(err);
          res.send({isSuccess: true});
        });
      })
};

ProfileController.prototype.modifyPsd = function (req, res){
  var userId = req.session.userId;

  user.findOne({id: userId})
      .then(function(data){
        data.password = req.param('newPassword');
        data.save(function(err){
          console.log(err)
          res.send({isSuccess: true})
        });
      })
};

module.exports = ProfileController;