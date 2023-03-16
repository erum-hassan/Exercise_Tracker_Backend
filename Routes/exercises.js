const express = require('express')
const { getExercise, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController')

const {auth,logout} = require('./middleware/auth')
const exerciseRouter = express.Router()
exerciseRouter.use(express.json())

exerciseRouter.get('/',auth,getExercise);
exerciseRouter.post('/',auth,createExercise)
exerciseRouter.put("/:id",auth,updateExercise)
exerciseRouter.delete('/:id',auth,deleteExercise)







module.exports = exerciseRouter