const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
username: {
    type: String,
    required: true,
   trim:true
  },
  profilepic: {
    type: Buffer,
   default:""
  },
  imageMimeType:String

});


const User = mongoose.model('User', userSchema);
module.exports = User;
