const mysql = require('mysql2');
const functions = require('express').Router();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

functions.get('/convidados', (_req, res) => {
  connection.query('select * from convidados', function (error, results) {
    if (error) res.status(500).json(error);

    res.status(200).json(results);
  });
});

functions.get('/convidado/:id', (req, res) => {
  const query = `select * from convidados where id_correlato = ${req.params.id}`;
  connection.query(query, function (error, results) {
    if (error) res.status(500).json(error);

    res.status(200).json(results);
  });
});

functions.put('/convidado/:id', (req, res) => {
  const atualizar = req.body;
  const correlato = req.params.id;

  try {
    const confirmados = atualizar
      .filter((convidado) => convidado.confirmado === 1)
      .map((convidado) => convidado.id);
    const naoConfirmados = atualizar
      .filter((convidado) => convidado.confirmado === 0)
      .map((convidado) => convidado.id);

    const queryConfirmados = `update convidados set confirmado = 1 where id in (${confirmados.join(
      ','
    )}) and id_correlato = ${correlato}`;

    connection.query(queryConfirmados, (error, results) => {
      if (error) throw error;

      console.log(results);
    });

    const queryNaoConfirmados = `update convidados set confirmado = 0 where id in (${naoConfirmados.join(
      ','
    )}) and id_correlato = ${correlato}`;

    connection.query(queryNaoConfirmados, (error, results) => {
      if (error) throw error;

      console.log(results);
    });
  } catch (error) {
    res.status(500).json(error);
  }

  res.sendStatus(200);
});

module.exports = functions;
