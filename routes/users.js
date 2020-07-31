var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
var {body, validationResult} = require('express-validator');
var userService = require("../services/user-registration-service");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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

router.get('/list', (req, res) => {
  userService.listAllUsers(req, res);

});

module.exports = router;
