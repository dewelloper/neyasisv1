var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Neyasis Hizmetler' });
});

module.exports = router;