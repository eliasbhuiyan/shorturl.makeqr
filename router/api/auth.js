const express = require('express');
const registration = require('../../controllers/auth/Registration');
const loginUser = require('../../controllers/auth/Login');
const authRoute = express.Router();

authRoute.get("/registration", registration)

authRoute.get("/login", loginUser)

module.exports = authRoute;