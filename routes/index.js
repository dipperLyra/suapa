var express = require('express');
var router = express.Router();
var model = require("../models/index");



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Suapa'});
});

module.exports = router;
