const express = require('express');
const cors = require('cors');

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
