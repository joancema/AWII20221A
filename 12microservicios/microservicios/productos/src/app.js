const express = require('express')
const app = express()

respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Producto Micro'
}
app.get('/api/v2/productos',(req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Hamburguesa","Salchipapa","Hot-dog")
    console.log(`Microservicio de productos`);
    return res.send(respuesta)

})

module.exports= app;