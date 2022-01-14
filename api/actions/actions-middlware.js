// add middleware here related to actions
const Action = require("./actions-model.js");
const Project = require("../projects/projects-model.js");

async function checkActionId(req, res, next) {
  try {
    const id = req.params.id;
    const possibleAction = await Action.get(id);
    if (possibleAction) {
      req.actions = possibleAction;
      next();
    } else {
      next({ status: 404, message: `No action found with ID: ${id}` });
    }
  } catch (err) {
    next(err);
  }
}

async function checkAction(req, res, next) {
  try {
    const { project_id, description, notes } = req.body;
    if (!description || !notes || !project_id) {
      res
        .status(400)
        .json({
          message:
            "Please enter a project_id, description, and notes to submit a new action",
        });
    } else {
      const possibleProject = await Project.get(project_id);
      if (!possibleProject) {
        next({
          status: 404,
          message: `No project found with ID: ${project_id}`,
        });
      } else {
        req.project = possibleProject;
        next();
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkActionId,
  checkAction,
};
