const express = require('express');
const apiRoute = express.Router();
const authRoute = require('./auth');
const shorturlRoute = require('./shorturl');

apiRoute.use("/auth", authRoute)

apiRoute.use("/generate", shorturlRoute)


module.exports = apiRoute;