const express = require('express');
const router = express.Router();
const { Course, User } = require('../models');
const authenticateUser = require('./authenticate');

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
router.post('/', authenticateUser, async (req, res) => {
    const course = await Course.create(req.body);
    const uri = `${req.originalUrl}/${course.id}`;
    res.set('Location', uri);
    res.status(201).end();
});

//Updates course returns no content
router.put('/:id', authenticateUser, async (req, res) => {
    const id = req.params.id;
    const course = await Course.findByPk(id, { include: [ User ] });
    course.update(req.body);
    res.status(204).end();
});

//Deletes a course and returns no content
router.delete('/:id', authenticateUser, async (req, res) => {
    const id = req.params.id;
    const course = await Course.findByPk(id, { include: [ User ] });
    course.destroy();
    res.status(204).end(); 
});
module.exports = router;