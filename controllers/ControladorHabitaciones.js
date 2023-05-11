import { ServicioHabitacion } from "../services/ServicioHabitacion.js" 

export class ControladorHabitaciones{
    constructor(){}

    
    async registrandoHabitacion(peticion,respuesta){
        //los codigos de respuestas del protocolo http de vamos al inspeccionador y despues al network
        let datosHabitacion=peticion.body
        let objetoserviciohabitacion = new ServicioHabitacion()
        try{

            if(datosHabitacion.precio < 150 && datosHabitacion.numeropersonas<2){
                respuesta.status(400).json({
                    "mensaje":"Revisa la cantidad de persona maxima de personas..."
                })
            }else if(datosHabitacion.precio < 150){
                respuesta.status(400).json({
                    "mensaje":"Revisa el precio por noche..."
                })
            }else if(datosHabitacion.numeropersonas<2){
                respuesta.status(400).json({
                    "mensaje":"Debe ser mas gente..."
                })
            }else if(!datosHabitacion.precio){

            }else{
                await objetoserviciohabitacion.registrar(datosHabitacion);
                respuesta.status(200).json({
                "mensaje":"Exito agreando datos..."
            })
            }
        }
        catch(error){

            if(!datosHabitacion.precio){
                
            }

            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }


    async buscandoHabitacion(peticion,respuesta){
        let objetoserviciohabitacion = new ServicioHabitacion()
        try{
            let idHabitacion=peticion.params.idhabitacion
            respuesta.status(200).json({
                "mensaje":"Exito buscando la habitacion..."+idHabitacion,
                "habitacion":await objetoserviciohabitacion.buscarPorId(idHabitacion)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    async buscandoHabitaciones(peticion,respuesta){
        let objetoserviciohabitacion = new ServicioHabitacion();
        try{
            respuesta.status(200).json({
                "mensaje":"Exito exito buscando las habitaciones...",
                "habitaciones":await objetoserviciohabitacion.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body

        let objetoserviciohabitacion = new ServicioHabitacion();
        try{
            await objetoserviciohabitacion.editar(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito editando las habitaciones..."
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
}