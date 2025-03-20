const ValidateEmail = require("../../helpers/ValidateEmail");
const validatePassword = require("../../helpers/validatePassword");
const registrationSchema = require("../../modal/registrationSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        // Aaaaaaaa1
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
        if(!existingUser){
            return res.status(400).send({error: "User not found!"}) 
        }    
        // Check password
        const match = await bcrypt.compare(password, existingUser.password);
        if(!match){
         return res.status(400).send({message: "User not found!"})
        }
        // Access Token    
        const access_token = jwt.sign({
            data: {
                id: existingUser._id,
                email: existingUser.email
            }
        }, process.env.JWT_KEY, { expiresIn: '1d' });

        res.status(200).cookie("access_token", access_token).redirect("/")
    } catch (error) {
      return res.status(400).send({error: "Server side error! please try again."})
    }
}

module.exports = loginUser