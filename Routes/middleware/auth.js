const jwt = require('jsonwebtoken')
const SECRET_KEY='SECRET_KEY'

const auth = async (req,res,next) =>{
  
    try{
        let token = req.headers.authorization
        if(token){
            token = token.split(" ")[1]
            let user = jwt.verify(token,SECRET_KEY)
            req.userId = user.id
        }
        else{
                res.status(400).json({message:"unauthorize user"})
        }
        next()
    }
    catch (error){
        console.log(error)
        res.status(400).json({message:"Unauthorize user"})
    }
}

const logout = async (req,res,next)=>{
    try{
        // req.headers.authorization = null
        // console.log( req.headers.authorization)

        

        res.status(200).json({message:"deleted"})
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:"something went wrong"})
    }
}

module.exports= {auth,logout}