var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Neyasis Anasayfa' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Neyasis Anasayfa' });
});

module.exports = router;
