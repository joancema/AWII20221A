const express = require('express')
const app = express()

const respuesta ={
    data:[],
    arquitectura:'Monolítico',
    descripcion:'Acceso a toas las rutas en un solo enctrypoint'
}
app.use((req,res,next)=>{
    respuesta.data=[]
    next()
})
app.get('/api/v1/usuarios' , (req,res)=>{
    respuesta.data.push("administrador","Superadministrador","invitado");
    return res.send( respuesta);
})
app.get('/api/v1/productos', (req,res)=>{
    respuesta.data.push("pizza","hamburguesa","papas fritas")
    return res.send( respuesta);
})
app.get('/api/v1/clientes' , (req,res)=>{
    respuesta.data.push("Consumidor final","Ruben S", "Eduardo P")
    return res.send( respuesta);
})

module.exports=app;