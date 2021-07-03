const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

// app.use(cors);

// Import DB Connection file
const mySqlConnection = require("./connection");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// POST game data to DB
app.post('/postGameData', function (req, res) {
  console.log("req", req.body);
  // res.send(req.body)
  let pl1 = req.body?.player1;
  let pl2 = req.body?.player2;
  let pl1score = req.body?.player1score;
  let pl2score = req.body?.player2score;
  let winner = req.body?.winner;
  let diff = req.body?.difference
  var sql = `INSERT INTO game (player1, player2, player1score, player2score, winner, difference) VALUES ('${pl1}', '${pl2}', ${pl1score}, ${pl2score}, '${winner}', ${diff})`;  
  mySqlConnection.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
})

// Server Start
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})