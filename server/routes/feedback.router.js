const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('Handling POST for /feedback', req.body.feeling);
  const queryText = `INSERT INTO feedback (feeling, understanding, support, comments, flagged)
                    Values
                    ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comment, req.body.flagged])
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
  const queryText = 'SELECT * FROM feedback';
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

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Handling delete on /feedback', id);
    const queryText =   `DELETE FROM feedback WHERE id=$1;`;
    pool.query(queryText, [id])
        .then(result => {
            console.log(`Deleted entry `, result);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`Error deleting entry`, error);
            res.sendStatus(500);
        })

})


module.exports = router;
