const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
