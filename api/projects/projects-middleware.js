// add middleware here related to projects
const Project = require('./projects-model.js');

async function checkProjectId(req, res, next) {
    try {
        const id = req.params.id;
        const possibleProject = await Project.get(id);
        if (possibleProject) {
            req.project = possibleProject;
            next();
        } else {
            next({ status: 404, message: `No project found with ID: ${id}` })
        }
    } catch (err) {
        next(err);
    }
}

function checkProject(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) {
        next({ status: 400, message: "Projects require a name and description" });
    } else {
        next();
    }
}

function checkProjectCompleted(req, res, next) {
    if (req.body.completed === undefined) {
        next({ status: 400, message: "Please include a 'completed' key in your body" });
    } else {
        next();
    }
}

module.exports = {
    checkProjectId,
    checkProject,
    checkProjectCompleted
};