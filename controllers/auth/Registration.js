const ValidateEmail = require("../../helpers/ValidateEmail")
const validatePassword = require("../../helpers/validatePassword");
const registrationSchema = require("../../modal/registrationSchema");
const registration = async (req, res)=>{
    const {fullName, email, password} = req.body;
    try {
        if(!fullName){
            return res.status(400).send("Name is required!")
        }
        if(!email){
            return res.status(400).send("Email is required!")
        }
        if(!ValidateEmail(email)){
            return res.status(400).send("Email address is invalid!")
        }
        if(!password){
            return res.status(400).send("Password is required!")
        }
        const passwordValidResult = validatePassword(password)
        if(passwordValidResult){
            return res.status(400).send(passwordValidResult)
        }
        
        const users = await registrationSchema({
         fullName, email, password
        })
    
        users.save()
    
        res.send(users)
    } catch (error) {
       return res.status(400).send("Server side error! please try again.")
    }
}

module.exports = registration