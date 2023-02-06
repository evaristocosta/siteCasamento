const express = require('express');
const cors = require('cors');
const app = express();

const functions = require('./functions');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/', functions);

app.get('*', (_req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
