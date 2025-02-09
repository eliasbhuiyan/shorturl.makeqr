const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  shorrtUrls:{
    ref: "ShortUrl",
    type: [Schema.Types.ObjectId],
  }
});

module.exports = mongoose.model('User', registrationSchema);