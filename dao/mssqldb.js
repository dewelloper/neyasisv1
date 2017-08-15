var express = require("express");
var sql = require("mssql");

// Create connection to database
var dbConfig = 
   {
    user: 'sa', // update me
    password: 'sa1234', // update me
    server: 'DEWELLOPER\\SQL2016', // update me
    database: 'NeyasisExpress', //update me
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }    
   }

 var executeQuery = function(res, query){             
    sql.connect(dbConfig, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                        // create Request object
                        var request = new sql.Request();
                        // query to the database
                        request.query(query, function (err, resp) {
                          if (err) {
                                     console.log("Error while querying database :- " + err);
                                     res.send(err);
                                     sql.close();
                                    }
                                    else {
                                      res.send(resp.recordset);
                                      sql.close(); // without pooling there is no need
                                           }
                              });
                      }
     });           
}

   module.exports = {
    executeQuery: executeQuery
  }