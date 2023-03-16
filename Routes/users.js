const express = require('express')
const userRouter = express.Router()
const {auth,logout} = require('./middleware/auth')
const {signup, login,signout} = require('../controllers/userController')

userRouter.use(express.json())


userRouter.post('/signup',signup )

userRouter.post('/login',login)
userRouter.post('/logout',logout,signout)


module.exports = userRouter