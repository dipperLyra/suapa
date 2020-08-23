var express = require('express');
var router = express.Router();
var item = require("../services/post-items");
var model = require("../models/index");


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Suapa'})
});

/* create new item */
router.post('/items/add', (req, res) => {
  item.createItem(req, res);
});

/* list all items */
router.get('/items/', function(req, res) {
  item.getAllItems()
  .then(result => {
    res.render('items/list', { title: 'Suapa', result: result })
  })
  .catch(err => res.send(err))
});




/* render pages */

router.get('/items/page', function(req, res, next) {
  res.render('items/post',  {title: 'Suapa'})
});

module.exports = router;
