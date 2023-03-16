const userschema = require('../userSchema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY='SECRET_KEY'

const signup = async(req,res)=>{


    const {name,email,password}= req.body;

    try{
        const existingUser = await userschema.findOne({email:email})
        if(existingUser){
            return res.status(400)
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const result = await userschema.create({
            name:name,
            email:email,
            password:hashedPassword
        })

        const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)
       
        res.status(200).json(({user:result,token:token}))
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
    }

    

}
const login =  async (req,res)=>{
     
    const {email,password} = req.body

    try
    {
        const existingUser = await userschema.findOne({email:email})
        if(!existingUser){
            return res.status(400).json({message:"User not found"})
        }
        const matchedpassword = await bcrypt.compare(password,existingUser.password)
       
        if(!matchedpassword) {
            return res.status(400).json({message:"Invalid Credential"})
        }
        const token = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY)
        res.status(201).json({user:existingUser,token:token})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"})
       
    }
}

const signout = async(req,res)=>{
    try{
        res.status(200).json({message:"donedelet"})
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:"something went wrong"})
    }
}


module.exports = { signup, login,signout}