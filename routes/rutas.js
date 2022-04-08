import express from 'express'

//una variable para almacenar el
//la funcionalidad de express Router
//que es la que me permite personalizar y separar rutas

export let routes= express.Router()

//defino mis rutas 

routes.get('/API/v1/viernes', function (req, res) {
    res.send('Hello World')
  })

  routes.get('/API/v1/viernes2', function (req, res) {
    res.send('Hola Todos')
  })
