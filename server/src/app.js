const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.query('select * from convidados', function (error, results, fields) {
  if (error) {
    throw error;
  }

  console.log(results);
  console.log(fields);
});

//const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
//app.use(routes);

app.get('*', (_req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
