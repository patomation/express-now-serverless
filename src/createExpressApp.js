const express = require('express');
const helmet = require('helmet'); // Security
const bodyParser = require('body-parser'); // Helps to see req.body in post requests
require('dotenv').config() //Get .env variables and attach to proccess.env

const mongoose = require('mongoose'); // Database
//TODO: Move to env
const MONGODB_URL=process.env.MONGODB_URL;
const User = require('./database/schemas/User.js');


// set up db connection
mongoose.connect(MONGODB_URL);
mongoose.Promise = global.Promise;

module.exports = express()
.use(helmet())
.use((req, res, next) => {
  // req.base = `${req.protocol}://${req.get('host')}`
  req.db = {
    'User': mongoose.model('User',User)
  }
  return next();
})
.use(bodyParser.urlencoded({
  extended: true
}));
