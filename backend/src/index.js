const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

/**
 * Allows body requests as JSON
 */
app.use(express.json());
app.use(routes);

app.listen(3333); 