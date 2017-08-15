var express = require('express');
var sqldb = require('../dao/mssqldb');
var router = express.Router();

//GET API
router.get('/api/advertisements', function(req, res) {
    var query = "SELECT TOP 20 * FROM Advertisements";
    sqldb.executeQuery(res, query);
});

module.exports = router;



