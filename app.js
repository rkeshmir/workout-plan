const express = require('express');
const app = express();
const db = require('./db');
const UserController = require('./user/UserController');
const PlanController = require('./plan/PlanController');
app.use('/users', UserController);
app.use('/plan', PlanController);
module.exports = app;
