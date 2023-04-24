import mongoose from "mongoose";

export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('Exito....conectado a la BASE DE DATOS...')
    }
    catch(error){
        console.log('Fallamos a la conexion BD'+error)
    }
}