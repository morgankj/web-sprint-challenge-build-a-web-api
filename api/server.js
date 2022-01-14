// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const express = require('express');
const server = express();

server.use(express.json());

const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>SPRINT CHALLENGE 4.1</h1>
    `);
});


module.exports = server;
