const express = require('express');
const MakeShortUrl = require('../../controllers/shorturl/MakeShortUrl');
const shorturlRoute = express.Router();

shorturlRoute.post("/shortUrl", MakeShortUrl)

module.exports = shorturlRoute;