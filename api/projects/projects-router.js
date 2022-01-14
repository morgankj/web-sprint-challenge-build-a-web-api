// Write your "projects" router here!
const express = require('express');
const router = express.Router();

const Projects = require('./projects-model.js');
const { checkProjectId } = require('./projects-middleware.js');

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next);
});

router.get('/:id', checkProjectId, (req, res) => {
    res.json(req.project);
})

module.exports = router;