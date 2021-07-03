const mysql = require('mysql');

// DB create connection data
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pratik',
    password: '1307',
    database: 'mydb',
    multipleStatements: true
});

// DB connecttion
connection.connect((err) => {
  if(!err){
    console.log("connection established");
  }else{
    console.log(err);
  }
});

module.exports = connection;