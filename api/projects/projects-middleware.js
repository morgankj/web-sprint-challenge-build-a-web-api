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
            next({ status: 404, message: `No project found with ID: ${id}`})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkProjectId
};