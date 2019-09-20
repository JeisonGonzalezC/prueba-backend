'use strict'

const Task = require('../Models/Task')

function getTasks(req, res){
    Task.find({}, (err, tasks)=>{
        if(err){
            res.status(500).send({message: "Error al encontrar tareas"})
        }else if(!tasks){
            res.status(404).send({message: "No hay tareas"})
        }else{
            res.status(200).send(tasks)
        }
    })
}

function getTask(req, res){
    const idTask = req.params.idTask

    Task.findById(idTask, (err, task)=>{
        if(err){
            res.status(500).send({message: "Error al encontrar tarea"})
        }else if(!task){
            res.status(404).send({message: "Tarea no encontrada"})
        }else{
            res.status(200).send(task)
        }
    })
}

function updateTask(req, res){
    const idTask = req.params.idTask

    const infoTask = req.body

    Task.findByIdAndUpdate(idTask, infoTask, (err, task)=>{
        if(err){
            return res.status(500).send({message: "Error al encontrar y actualizar la tarea"})
        }

        res.status(200).send(infoTask)
    })
}

function deleteTask(req, res){
    const idTask = req.params.idTask

    Task.findById(idTask, (err, task)=>{
        if(err){
            return res.status(500).send({message: "Error al encontrar la tarea para borrar"})
        }

        task.remove(err =>{
            if(err){
                return res.status(500).send({message: "Error al borrar tarea"})
            }
            res.status(200).send({task, message: "Tarea borrada correctamente"})
        })
    })
}

function saveTask(req, res){
    const task = new Task()

    const {
        name,
        description,
        priority,
        typeTask
    } = req.body

    task.name = name
    task.description = description
    task.priority = priority
    task.typeTask = typeTask
    task.save((err, taskStore)=>{
        if(err){
            res.status(500).send({message: "Error al guardar"})
        }

        res.status(200).send({task: taskStore})
    })
}

module.exports = {
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    saveTask
}