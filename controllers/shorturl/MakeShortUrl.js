const generateShortId = require("../../helpers/generateShortId");
const isUrlValid = require("../../helpers/isUrlValid");
const ShortUrlSchema = require("../../modal/ShortUrlSchema");

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


module.exports = MakeShortUrl;