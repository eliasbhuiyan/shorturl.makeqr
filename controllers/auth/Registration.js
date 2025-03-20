const ValidateEmail = require("../../helpers/ValidateEmail")
const validatePassword = require("../../helpers/validatePassword");
const registrationSchema = require("../../modal/registrationSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const registration = async (req, res)=>{
    const {fullName, email, password} = req.body;
    console.log(fullName, email, password);
    
    try {
        if(!fullName){
            return res.status(400).send({error: "Name is required!"})
        }
        if(!email){
            return res.status(400).send({error: "Email is required!"})
        }
        if(!ValidateEmail(email)){
            return res.status(400).send({error: "Email address is invalid!"})
        }
        if(!password){
            return res.status(400).send({error: "Password is required!"})
        }
        const passwordValidResult = validatePassword(password)
        if(passwordValidResult){
            return res.status(400).send({error: passwordValidResult})
        }

        const existingUser = await registrationSchema.findOne({email})
        if(existingUser){
            return res.status(400).send({error: "Email already exist! try with another email."}) 
        }

        bcrypt.hash(password, saltRounds, function(err, hash) {
            const users = registrationSchema({
             fullName, email, password: hash
            })
            users.save()
            res.redirect("/login")
        });
    } catch (error) {
       return res.status(400).send({error: "Server side error! please try again."})
    }
}

module.exports = registration