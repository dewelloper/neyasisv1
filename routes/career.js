var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/career', function(req, res, next) {
    res.render('career', { title: 'Neyasis Kariyer' });
});

module.exports = router;