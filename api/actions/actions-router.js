// Write your "actions" router here!
const express = require('express');
const router = express.Router();

const Action = require('./actions-model.js');
const { checkActionId, checkAction } = require('./actions-middlware.js');

router.get('/', (req, res, next) => {
    Action.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(next);
});

router.get('/:id', checkActionId, (req, res, next) => {
    Action.get(req.params.id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(next);
});

router.post('/', checkAction, (req, res, next) => {
    Action.insert(req.body)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(next);
});

module.exports = router;