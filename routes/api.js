const express = require('express')
const router = express.Router()

/* GET the home. */
router.get('/', (req, res, next) => {
  res.send({ source: 'https://github.com/vaibhavpandeyvpz/resumer' })
})

module.exports = router
