const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect('mongodb+srv://nodewithdb:9uSrtrNjxojrYvqL@cluster0.hppyt.mongodb.net/ShortUrl?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
}

module.exports = dbConnect;