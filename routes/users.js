const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST sets location header  */
router.post('/users', (req, res) => {
  return res.status(201).end();
});



// //Get the current user.
// router.get('/', authenticateUser, function(req, res, next) {

//   return res.status(200).json({
//     userId: req.currentUser.get("id"),
//     firstName: req.currentUser.get("firstName"),
//     lastName: req.currentUser.get("lastName"),
//     emailAddress: req.currentUser.get("emailAddress")
//   })
// });

/* Returns a list of courses */
module.exports = router;
