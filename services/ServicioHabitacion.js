import {modeloHabitacion} from "../models/modeloHabitacion.js"

export class ServicioHabitacion{
    constructor(){}
    async registrar(datosHabitacion){
        let HabitacionNueva=new modeloHabitacion(datosHabitacion)
        return await HabitacionNueva.save()
    }
    async buscarTodas(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }
    async buscarPorId(idHabitacion){
        let habitacion = await modeloHabitacion.findById(idHabitacion)
        return habitacion
    }
    async editar(idHabitacion,datosHabitacion){
        console.log(idHabitacion)
        console.log(datosHabitacion)
        return await modeloHabitacion.findByIdAndUpdate(idHabitacion,datosHabitacion)
    }
}