// Write your "projects" router here!
const express = require('express');
const router = express.Router();

const Projects = require('./projects-model.js');
const { checkProjectId } = require('./projects-middleware.js');

router.get('/', (req, res) => {
    Projects.get()
        // THIS ISNT WORKING
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Error retrieving projects" });
        })
});

router.get('/:id', checkProjectId, (req, res) => {
    res.json(req.project);
})

module.exports = router;