export class ControladorHabitaciones{
    constructor(){}
    registrandoHabitacion(peticion,respuesta){
        //los codigos de respuestas del protocolo http de vamos al inspeccionador y despues al network
        try{
            let datosHabitacion=peticion.body
            console.log(datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito agreando datos..."
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    buscandoHabitacion(peticion,respuesta){
        try{
            let idHabitacion=peticion.params.idhabitacion
            console.log(idHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito buscando la habitacion..."+idHabitacion
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    buscandoHabitaciones(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":"Exito exito buscando las habitaciones..."
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    editandoHabitacion(peticion,respuesta){
        let editarhabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        console.log(editarhabitacion)
        console.log(datosHabitacion)
        try{
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