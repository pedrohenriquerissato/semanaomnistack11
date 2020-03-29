const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());

/**
 * Allows body requests as JSON
 */
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;