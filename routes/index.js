const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('shop/index', { title: 'Shopping Cart' })
})

module.exports = router
