import mongoose from "mongoose";

export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('Exito conectandonos a la BD')
    }
    catch(error){
        console.log('Fallamos a la conexion BD'+error)
    }
}