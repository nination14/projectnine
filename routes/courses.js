const express = require('express');
const router = express.Router();
const { Course, User } = require('../models');

//Returns a list of courses (includin the user that owns this course)
router.get('/', async (req, res) => {
    const courses = await Course.findAll({ include: [ User ] });
    res.json(courses);
});

//Returns a course (including the user that owns the course) for the provided course ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const course = await Course.findByPk(id, { include: [ User ] });
    res.json(course);
});

//Creates a course 


module.exports = router;