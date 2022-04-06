//importaciones necesarias:

//importando express

//const express = require('express')
import express from 'express'



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

            this.app.get('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })

    }


}