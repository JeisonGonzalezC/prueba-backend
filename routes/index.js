'use strict'

const express = require('express')
const TaskController = require('../Controllers/TaskController')
const api = express.Router()

api.get('/task', TaskController.getTasks)
api.get('/task/:idTask', TaskController.getTask)
api.post('/task', TaskController.saveTask)
api.put('/task/:idTask', TaskController.updateTask)
api.delete('/task/:idTask', TaskController.deleteTask)

module.exports = api