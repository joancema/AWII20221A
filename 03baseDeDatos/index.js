const mongoose = require('mongoose');
const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/ejemploSextoA?retryWrites=true&w=majority";

( async ()=>{
    const estadoConexion = await mongoose.connect(conexion);
    const Usuario =  mongoose.model("Usuario", { nombre: String } );
    const usuario1=  new Usuario({nombre:"Prueba sexto A"});
    const guardado=  await usuario1.save();
    const resultado =  await Usuario.find();
    console.log(resultado)
})();
    

// npm init --y
// npm i mongoose
