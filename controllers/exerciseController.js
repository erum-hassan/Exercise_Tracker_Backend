const exerciseSchema = require('../exerciseSchema')


const createExercise = async(req,res)=>{
   const {name,description,activity,duration,date} = req.body
   console.log(req.body)
   try{
   
      const data = await exerciseSchema.create({
         name:name, description:description,activity:activity,duration:duration,date:date,userId:req.userId
      })
   
      res.status(200).json(data)
   }
   catch(error){
         console.log(error)
         res.status(400).json({message:"some thing went wrong"})
   }

}

const updateExercise = async(req,res)=>{

   const {name,description,activity,duration,date}= req.body
   const id = req.params.id
   // console.log('token userid : ', req.userId);

   const updateExercise = {
      name:name,
      description:description,
      activity:activity,
      duration:duration,
      date:date,
      userId:req.userId
   }

   try{
      const updated = await exerciseSchema.findByIdAndUpdate(id,updateExercise,{new:true})
      res.status(200).json(updated)
   }
   catch(error){
      console.log(error)
      res.status(400).json({message:"wentworng"})
   }

}

const deleteExercise = async(req,res)=>{

   const id =req.params.id 
   try{
      const deletedExercise = await exerciseSchema.findByIdAndRemove(id)
      res.status(200).json(deletedExercise)
   }
   catch(error){
      console.log(error)
      res.status(400).json({message:"something went worng"})
   }
}

const getExercise = async(req,res)=>{
 
   try{
   const exercises = await exerciseSchema.find({userId:req.userId}).sort({date: -1})
   res.status(200).json(exercises)
   }
   catch(error){
      console.log(error)
      res.status(400).json({message:"something went worong"})
   }


}



module.exports = {createExercise,updateExercise,deleteExercise,getExercise}