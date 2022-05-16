// require('http')
const express = require('express');
const cors= require('cors');

const app = express();
const PUERTO=2500;

app.use(cors()).use(express.json());

app.get('/prueba', (req,res,next)=>{
    next();
}, (req,res, next)=>{
    res.status(200).send({ mensaje:"Hola prueba" });
})
app.use('/prueba', (req,res, next)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
})
app.post('/prueba', (req,res,next)=>{
    res.status(201).send(req.body);
    next();
})
app.use('/prueba', (req,res,next)=>{
    console.log(`Después de Middleware`);
    // res.status(201).send(req.body);
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutándose en puerto ${PUERTO}`)
})


