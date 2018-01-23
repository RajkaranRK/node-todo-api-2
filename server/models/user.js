const mongoose = require('mongoose');


var User = mongoose.model('User',{
  name:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  age:{
    type:Number,
    default:null
  }
});

module.exports = {User};
