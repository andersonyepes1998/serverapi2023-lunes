import express from 'express'
import { rutas } from './routes/rutas.js'

export class API {

    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT,()=>console.log(`encendido en ${process.env.PORT}`)
        )
    }
    enrutarPeticiones(){
        //para poderlo usar y que te salga en la conosolaa.....
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarConBD(){}

}