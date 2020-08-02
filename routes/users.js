var express = require('express');
var router = express.Router();
var {body, validationResult} = require('express-validator');
var userService = require("../services/user-registration-service");
var model = require("../models/index");

/* GET users listing. */
router.get('/', function(req, res, next) {
  userService.listAllUsers()
  .then(users => res.send(users))
});

/* Create new users */
router.post('/', [
  body("username").isAlphanumeric(),
  body("email").isEmail(),
  body("password").isLength({min: 7})
], (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

    userService.register(req, res);
});

/* sign in */

/* render pages */
router.get('/signup-page', function(req, res) {
    res.render('user/sign-up', { title: 'Suapa'})
})

router.get('/signin-page', function(req, res) {
  res.render('user/sign-in', { title: 'Suapa'})
})

/* wipes the table... for development only */
router.delete('/', () => {
  userService.deleteAllUsers();
})

module.exports = router;
