//importando dotenv
// require('dotenv').config()
import 'dotenv/config'

//levantar servidor
import {Servidor} from './Server/Servidor.js'

//2.  utilizar clase Servidor 
let servidorApi = new Servidor()
servidorApi.levantarServidor()
