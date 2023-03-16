const mongoose = require('mongoose')

const exerciseschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     activity:{
       type:String,
        required:true
     },
     duration:{
       type:Number,
       required: true
     },
    date:{
        type: Date,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

module.exports = mongoose.model('Exercise',exerciseschema)