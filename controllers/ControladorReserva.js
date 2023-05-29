import { ServicioReserva } from "../services/ServicioReserva.js";
import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
//import { ControladorHabitaciones } from "./ControladorHabitaciones.js";
import { modeloReseva } from "../models/modeloReserva.js";


export class ControladorReservas{
    constructor(){}

    async buscandoReserva(req,res){
        let idReserva=req.params.idReserva
        let servicioReserva = new ServicioReserva() 
        
        try{
            res.status(200).json({
                "mensaje":"Exito buscando la reserva..."+idReserva,
                "Reserva":await servicioReserva.buscarPorId(idReserva),
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }


    async buscandoReservas(req,res){
        let servicioReserva=new ServicioReserva();
        try{
            res.status(200).json({
                "mensaje":"Exito buscando las reservas de los clientes....",
                "reservas":await servicioReserva.buscarTodas()
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }

    async creandoReservas(req,res){
        let modelReser = new modeloReseva();
        modelReser=req.body
        // let datosReserva=req.body
        let servicioReserva = new ServicioReserva()
        let objetoHabitacion = new ServicioHabitacion();
        let habitacion = await objetoHabitacion.buscarPorId(modelReser.idHabitacion);
        console.log(habitacion);

        let fechaInicio = modelReser.fechainicioreserva;
        let fechaFinal = modelReser.fechafinalreserva;
        let calculoDias = objetoHabitacion



        try{
            // const{ nombrecliente, apellidocliente, telefonocliente, fechainicioreserva, fechafinalreserva, numeroadultos, numeroniños,totalpersonas, idHabitacion } = peticion.body; 
            if ( habitacion === null ) {
                return res.status(400).json({
                    "mensaje":"No se pudo encontrar la habitacion para reservar"
                })
            }else{
               if(habitacion.estado != true){
                return res.status(400).json({
                    "mensaje":"No se puedo reservar, no esta disponible"
                })
               }else{
                await servicioReserva.crearReserva(modelReser)
                console.log(modelReser)
                res.status(200).json({
                    "mensaje":"La habitacion se encuntra disponible. Exito agreando una reserva..."
                })
               }
            }
            
        }

        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva"+error
            })
        }
    }

    async editandoReserva(req,res){
        let datosReserva=req.body;
        let idReserva=req.params.idReserva;
        console.log(datosReserva);
        console.log(idReserva);

        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.editarReserva(idReserva,datosReserva)
            res.status(200).json({
                "mensaje":"Exito editando las Reservas..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion " + error
            })
        }
    }

}