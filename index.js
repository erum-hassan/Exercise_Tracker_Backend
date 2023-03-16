const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const exerciseRouter = require('./Routes/exercises')
const userRouter = require('./Routes/users')

const mongoDB = 'mongodb+srv://User:12345@cluster0.pyslknq.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(mongoDB).then(console.log('conneacted'))

//Apis



app.use('/exercise/',exerciseRouter)
app.use('/auth/',userRouter)

app.listen(5000)

