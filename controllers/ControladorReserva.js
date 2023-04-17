export class ControladorReservas{
    constructor(){}

    buscandoReserva(req,res){
        try{
            let idReserva=req.params.idReserva
            console.log(idReserva)
            res.status(200).json({
                "mensaje":"Exito buscando la reserva..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }


    buscandoReservas(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito buscando las reservas de los clientes...."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }

    creandoReservas(req,res){
        try{
            let datosReserva=req.body
            console.log(datosReserva)
            res.status(200).json({
                "mensaje":"Exito agreando una reserva..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva"+error
            })
        }
    }

    editandoReserva(req,res){
        let datosReserva=req.body;
        let editandoReserva=req.params.idReserva;
        console.log(datosReserva);
        console.log(editandoReserva);
        try{
            res.status(200).json({
                "mensaje":"Exito editando las habitaciones..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }

}