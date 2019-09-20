'use strict'
const mongoose = require('mongoose')
const schema = mongoose.Schema

const TaskSchema = schema({
    name: String,
    description: String,
    priority: Number,
    typeTask: {type: String, enum:['Casa', 'Escuela', 'Trabajo']}
})

module.exports = mongoose.model('Task', TaskSchema)