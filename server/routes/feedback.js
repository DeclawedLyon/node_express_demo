const { response } = require('express');
const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    return res.send('Feedback Page:');
  })

  router.post('/', (req, res) => {
    return res.send(`Feedback form posted.`)
  })

  return router;
}