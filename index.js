const express = require('express');
const dbConnect = require('./config/dbConnect');
require('dotenv').config()
const router = require('./router');
const app = express()
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(router)
dbConnect()


app.listen(8000, ()=> console.log("Server running"))