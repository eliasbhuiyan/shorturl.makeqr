const homePage = (req, res) => {

    res.render('index');

}
const loginPage = (req, res) => {

    res.render('registration');

}

const registrationPage = (req, res) => {

    res.render('registration');

}

module.exports = {homePage, loginPage, registrationPage}