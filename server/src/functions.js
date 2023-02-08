const mysql = require('mysql2');
const functions = require('express').Router();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

functions.get('/convidados', (_req, res) => {
  connection.query(`select * from convidados`, function (error, results) {
    if (error) res.status(500).json(error);

    const resultsComNomeLimpo = results.map((result) => {
      const nomeLimpo = result.nome
        .toLowerCase()
        .replaceAll(' ', '')
        .normalize('NFD')
        .replaceAll(/[\u0300-\u036f]/g, '');
      return { nome_limpo: nomeLimpo, ...result };
    });

    res.status(200).json(resultsComNomeLimpo);
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
  const confirmados = req.body.ids;
  const correlato = req.params.id;

  try {
    const queryNaoConfirmados = `update convidados set confirmado = 0 where id_correlato = ${correlato}`;

    connection.query(queryNaoConfirmados, (error, _results) => {
      if (error) throw error;
    });

    const queryConfirmados = `update convidados set confirmado = 1 where id in (${confirmados.join(
      ','
    )}) and id_correlato = ${correlato}`;

    connection.query(queryConfirmados, (error, _results) => {
      if (error) throw error;
    });
  } catch (error) {
    res.status(500).json(error);
  }

  res.sendStatus(200);
});

module.exports = functions;
