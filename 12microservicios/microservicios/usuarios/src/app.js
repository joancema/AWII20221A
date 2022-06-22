const express = require('express')
const app = express()

respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Usuario Micro'
}
app.get('/api/v2/usuarios',(req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Administrador","Gerente","Invitado")
    console.log(`Microservicio de usuarios`);
    return res.send(respuesta)
})

module.exports= app;