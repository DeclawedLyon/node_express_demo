const { response } = require('express');
const express = require('express');

const router = express.Router();

module.exports = () => {
  console.log(`\n\nhelp\n`)

  router.get('/', (req, res) => {
    return res.send('Speakers List:');
  })

  router.get('/:shortname', (req, res) => {
    return res.send(`Detail page of ${req.params.shortname}`)
  })

  return router;
}