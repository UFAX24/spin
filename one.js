// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: "bidzbl6enkomai621hge-mysql.services.clever-cloud.com",
    user: "utv00lmohzn2vnnf",
    password: "F7lo6iLBM1QjGkwFMR8Z",
    database: "bidzbl6enkomai621hge"
});

// // simple query
// connection.query(
//   'SELECT * FROM `admin` WHERE `token` = '+token,
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
let token = "UFFS64LZKO"
// with placeholder
connection.query(
    'SELECT * FROM `users`  WHERE `token` = ? ',[token],
  function(err, results) {
      let TOKEN = results[0].token;
      let ufa_id = results[0].ufa_id;
    console.log(TOKEN,ufa_id);
  }
 
);