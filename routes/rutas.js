import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'

let controladorHabitaciones=new ControladorHabitaciones()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitaciones.buscandoHabitacion)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitaciones.buscandoHabitaciones)
rutas.post('/registrarhabitacion',controladorHabitaciones.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitaciones.editandoHabitacion)