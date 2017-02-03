"use strict";


var Cassandra = require('cassandra-driver');
var config = require('../../Keys/db_config');

var client = new Cassandra.Client({contactPoints:[127.0.0.1],keyspace:'demo'});



var db = {
    insert: function (callback) {
       client.execute("SELECT lastname, age, city, email, firstname FROM users WHERE lastname='Jones'", function (err, result) {
           if (!err){
               if ( result.rows.length > 0 ) {
                   var user = result.rows[0];
                   console.log("name = %s, age = %d", user.firstname, user.age);
               } else {
                   console.log("No results");
               }
           }
 
           // Run next function in series
           callback(err, null);
       });
   }
};



module.exports = db;