const express = require('express');
const router = express.Router();

/* GET the message. */
router.get('/', (req, res, next) => {
  res.send('https://github.com/vaibhavpandeyvpz/resumer');
});

module.exports = router;
