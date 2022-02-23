const express = require('express');
const router = express.Router();

//destructury of controllers to route them
const {signup, signin, signout} = require('../controllers/auth');
const {userSignupValidator} = require('../validator/index')

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;