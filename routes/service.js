var express = require('express')
var router = express.Router()

/* GET service page. */

router.get('/', (req, res) => {
    res.render('service' , { title: 'Services' });
});

module.exports = router;