// Write your "projects" router here!
const express = require('express');
const router = express.Router();

const Projects = require('./projects-model.js');
const { checkProjectId, checkProject } = require('./projects-middleware.js');

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next);
});

router.get('/:id', checkProjectId, (req, res) => {
    res.json(req.project);
});

router.post('/', checkProject, (req, res, next) => {
    Projects.insert(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(next);
});

module.exports = router;