var jwt = require('jsonwebtoken');
const validateUser = (req, res, next)=>{
    try {
        const token = req.cookies
        if(!token.access_token) return res.status(400).send("Unauthorized")

        var decoded = jwt.verify(token.access_token, process.env.JWT_KEY);
        
        if(decoded.data){
            req.user = decoded.data
            next()
        }
    } catch (error) {
        res.status(500).send("Unauthorized!")
    }
}

module.exports = validateUser;