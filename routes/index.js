var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var usersControl = require('../controllers/usersController');

/* GET home page. */
router.get('/', ctrlMain.index);

// Create a new user
router.post('/user', usersControl.createUser);

// Under work rn
router.get('/user', usersControl.getUser);

module.exports = router;
