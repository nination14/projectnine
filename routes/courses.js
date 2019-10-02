const express = require('express');
const router = express.Router();

//Returns a list of courses (includin the user that owns this course)
router.get('/', (req,res) => {
 res.status(200).end();
});

//Returns a course (including the user that owns the course) for the provided course ID
router.get('/:id', (req,res) => {
 res.status(200).end();
});

//Creates a course 


module.exports = router;