const generateShortId = require("../../helpers/generateShortId");
const isUrlValid = require("../../helpers/isUrlValid");
const validateUser = require("../../middlewares/authMiddleware");
const ShortUrlSchema = require("../../modal/ShortUrlSchema");
const loggedUser = ()=>{
    try {
        const token = req.cookies
        if(!token.access_token) return res.status(400).send("Unauthorized")

       var decoded = jwt.verify(token.access_token, process.env.JWT_KEY);
    
        if(decoded.data){
            return decoded.data
        }
  } catch (error) {
        return false 
    }
}
const MakeShortUrl = async (req, res)=>{
    const {url} = req.body;
    
    if(!url){
        return res.render("index", {
            error: "URL is required!",
        })
    }
    if(!isUrlValid(url)){
        return res.render("index", {
            error: "URL is not valid!",
        })
    }
    const shorted = generateShortId(url)
    const userData = loggedUser()
    if(userData){
      
    }
    else{
        const existUrl = await ShortUrlSchema.findOneAndUpdate({url}, {$set: {shortID: shorted}},  { new: true })
    
        if(existUrl){
            return res.render("index", {
                message: "Short Url created successfully!",
                longUrl: existUrl.url,
                shortUrl: `http://localhost:8000/${existUrl.shortID}`
            })
        }
     
        const shortUrl = new ShortUrlSchema({
            url: url,
            shortID: shorted
        })
    
        shortUrl.save()
    
        res.render("index", {
            message: "Short Url created successfully!",
            longUrl: shortUrl.url,
            shortUrl: `http://localhost:8000/${shortUrl.shortID}`
        })
    }
}


module.exports = MakeShortUrl;