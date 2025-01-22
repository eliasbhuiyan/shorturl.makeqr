const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const shortUrl = new Schema({
  url: {
    type: String,
    required: true
  },
  shortID: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ShortUrl', shortUrl);