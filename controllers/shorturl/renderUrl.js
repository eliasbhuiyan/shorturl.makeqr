const ShortUrlSchema = require("../../modal/ShortUrlSchema");

const renderUrl = async (req, res)=>{
    const shortID = req.params.shortId;

    const existUrl = await ShortUrlSchema.findOne({shortID})    

    if(!existUrl){
     return  res.status(404).send("Page not found!")
    }
    
    

   res.render(existUrl.url)
    
}

module.exports = renderUrl;