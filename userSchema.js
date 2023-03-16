const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        trim:true,
        minLength:4,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true,

    },
    password:{
        type:String,
        minLength:6,
        required:true
    }
})

module.exports = mongoose.model('user',userschema)