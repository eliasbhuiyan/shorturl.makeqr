const express = require('express');
const apiRoute = express.Router();
const authRoute = require('./auth');
const shorturlRoute = require('./shorturl');
const validateUser = require('../../middlewares/authMiddleware');

apiRoute.use("/auth", authRoute)

apiRoute.use("/generate", validateUser, shorturlRoute)


module.exports = apiRoute;