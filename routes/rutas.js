import express from 'express'

//importar controladores
import{buscarTodos,buscarporID,editar,eliminar,insertar} from '../controllers/controller.js'

//una variable para almacenar el
//la funcionalidad de express Router
//que es la que me permite personalizar y separar rutas

export let routes= express.Router()

//defino mis rutas 

routes.get('/API/v1/viernes', function (req, res) {
    res.send('Hello World')
  })

  routes.get('/API/v1/buscarTodos', buscarTodos)
  routes.get('/API/v1/buscarporID', buscarporID)
  routes.put('/API/v1/insertar', insertar)
  routes.put('/API/v1/editar', editar)
  routes.delete('/API/v1/eliminar', eliminar)
