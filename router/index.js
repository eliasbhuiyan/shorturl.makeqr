const express = require('express');
const apiRoute = require('./api');
const {renderUrl, visitHistory} = require('../controllers/shorturl/renderUrl');
const { homePage, loginPage, registrationPage } = require('./staticSites');
const router = express.Router();

router.use(process.env.BASE_API_URL, apiRoute)

router.get('/', homePage);

router.get('/login', loginPage);
router.get('/registration', registrationPage);

router.get("/visithistory/:shortId", visitHistory)
router.get("/:shortId", renderUrl)

router.use((req, res)=>{
    res.render('error');
})

module.exports = router;