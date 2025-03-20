const ShortUrlSchema = require("../../modal/ShortUrlSchema");

const renderUrl = async (req, res)=>{
    const shortID = req.params.shortId;

    const existUrl = await ShortUrlSchema.findOne({shortID})    

    if(!existUrl){
     return  res.render('error', {error: "We couldn't find the page you're looking for."});
    }

    if(existUrl.isAuth){
        const url = await ShortUrlSchema.findByIdAndUpdate(existUrl._id, {$push: {visitHistory:{clickedAt: Date.now()}}}, {new: true} )
        res.redirect(url.url)
    }
    else{
        res.redirect(existUrl.url)
    }
}


module.exports = {renderUrl};