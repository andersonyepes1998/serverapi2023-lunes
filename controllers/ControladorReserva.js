export class ControladorReservas{
    constructor(){}

    buscandoReserva(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito buscando reservas..."
            })
        }
        catch(error){

        }
    }

}