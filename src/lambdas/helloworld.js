const express = require('express');
const helmet = require('helmet');
const helloWorld = require('../routes/helloworld.js');

const app = express();

//Secures Express app by setting various HTTP headers.
// See: https://www.npmjs.com/package/helmet
// app.use(helmet());

//Import route
app.use(helloWorld);

module.exports = app;
