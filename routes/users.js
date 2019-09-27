var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST sets location header  */
router.post('/users', (req, res) => {
  return res.status(201).end();
});


/* Returns a list of courses */
module.exports = router;
