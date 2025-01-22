const express = require('express');
const apiRoute = require('./api');
const renderUrl = require('../controllers/shorturl/renderUrl');
const router = express.Router();


router.use("/api/v1", apiRoute)


router.get("/:shortId", renderUrl)

router.get('/', (req, res) => {

    res.render('index');

});

router.use((req, res)=>{
    res.send("Page not found!")
})

module.exports = router;