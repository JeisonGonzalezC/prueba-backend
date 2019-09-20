'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose. connect(config.db, (err, res)=>{
    if(err){
        return console.log("error al conectar a la bd")
    }
    app.listen(config.port, () =>{
        console.log(`Escuchando por el puerto ${config.port}`)
    })
})