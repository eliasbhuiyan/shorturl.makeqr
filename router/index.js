const express = require('express');
const apiRoute = require('./api');
const {renderUrl, visitHistory} = require('../controllers/shorturl/renderUrl');
const { homePage, loginPage, registrationPage } = require('./staticSites');
const router = express.Router();


router.use("/api/v1", apiRoute)




router.get('/', homePage);

router.get("/:shortId", renderUrl)
router.get("/visithistory/:shortId", visitHistory)


router.get('/login', loginPage);
router.get('/registration', registrationPage);

router.use((req, res)=>{
    res.send("Page not found!")
})

module.exports = router;