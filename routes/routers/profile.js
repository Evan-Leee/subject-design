var express = require('express');
var router = express.Router();
var ProfileController = require('../../controllers/profile-controller');
var profile = new ProfileController();

router.get('/', profile.getProfile);
router.post('/', profile.modifyInfo);
router.post('/modify', profile.modifyPsd);

module.exports = router;