//importaciones necesarias:

//importando express

//const express = require('express')
import express from 'express'

//importar rutas 
import {routes} from '../routes/rutas.js'



//programando la clase del servidor del servidor

export class Servidor{

    constructor(){

        this.app = express()//atributo
        this.enrutarPeticiones()


    }

    //metodos del servidor (¿Qué hace?)
    
    //activar servidor 
    levantarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido")
        })
        
    }


    enrutarPeticiones(){

            this.app.use('/',routes)

    }


}