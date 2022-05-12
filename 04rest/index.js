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

app.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutándose en puerto ${PUERTO}`)
})


