import { connect } from 'mongoose'


const dbConnection = async ()=>{
    try {
        await connect(process.env["MONGODB_CNN"] || "")
        console.log(`Base de datos ejecutandose sin problemas`);
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectarse a la base de datos");
    }
}


export {dbConnection}