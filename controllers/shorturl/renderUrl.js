const ShortUrlSchema = require("../../modal/ShortUrlSchema");

const renderUrl = async (req, res)=>{
    const shortID = req.params.shortId;

    const existUrl = await ShortUrlSchema.findOneAndUpdate({shortID}, {$push: {visitHistory:{clickedAt: Date.now()}}}, {new: true})    

    if(!existUrl){
     return  res.status(404).send("Page not found!")
    }
    
    

   res.redirect(existUrl.url)
    
}

const visitHistory = async (req, res)=>{
    const shortID = req.params.shortId;

    const existUrl = await ShortUrlSchema.findOne({shortID})    

    if(!existUrl){
     return  res.status(404).send("ID not found!")
    }

    res.send(existUrl)
}

module.exports = {renderUrl, visitHistory};