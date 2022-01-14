// add middleware here related to actions
const Action = require('./actions-model');

async function checkActionId(req, res, next) {
    try {
        const id = req.params.id;
        const possibleAction = await Action.get(id);
        if (possibleAction) {
            req.actions = possibleAction;
            next();
        } else {
            next({ status: 404, message: `No action found with ID: ${id}` })
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { checkActionId }
