const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('Handling POST for /feedback', req.body);
  const queryText = `INSERT INTO prime_feedback (feeling, understanding, support, comments, flagged, date)
                    Values
                    ($1, $2, $3, $4, $5, $6);`;
  pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments, req.body.flagged, req.body.date])
    .then((result) => {
      console.log('Finished POST for /feedback');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error handling POST for /feedback');
      res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
  console.log('Handling GET for feedback');
  const querytext = 'SELECT * FROM prime_feedback';
  return pool.query(queryText)
    .then((result) => {
      console.log('Finished GET for /feedback', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error handling GEt for /feedback', result.rows);
      res.sendStatus(500);
    })
})