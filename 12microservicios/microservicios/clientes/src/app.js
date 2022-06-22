const express = require('express')
const app = express()

respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Cliente Micro'
}
app.get('/api/v2/clientes',(req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Consumidor final","Juan Carlos","Edison A")
    console.log(`Microservicio de clientes`);
    return res.send(respuesta)

})

module.exports= app;