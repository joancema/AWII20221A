const cors = require('cors');
const express =  require('express');

const app =  express();
const ruta =  express.Router();
const PUERTO = 2500;
let comidas = [];

app.use(cors()).use(express.json());

ruta.get('/',(req,res)=>{
    res.status(200).send(comidas);
})
ruta.post('/',(req,res)=>{
    const {body} = req;
    if (comidas.filter(c=> c.codigo===body.codigo ).length>0 )
    {
        return res.status(400).send({
            message:`El código ya existe`,
            response: body
        })
    }
    comidas.push(body);
    res.status(201).send({
        message:`El dato se insertó correctamente`,
        response: body
    })

})
ruta.put('/', (req,res)=>{
    const {codigo, descripcion, tipo} =  req.body;
    if ( comidas.filter(c=> c.codigo=== codigo).length==0 )
    {
        return res.status(400).send({
            message:`No se encuentra la comida que desea modificar`
        })
    }
    let comida = comidas.filter(c=> c.codigo===codigo)[0];
    comida.descripcion = descripcion;
    comida.tipo= tipo;
    res.status(200).send({
        message:`Dato modificado con éxito`,
        response: comida
    })
})
ruta.delete('/:codigo', (req,res)=>{
    const {codigo} =  req.params;
    comidas  =  comidas.filter(c=>c.codigo !== codigo);
    res.status(200).send({
        message:`Eliminado correctamente la comida`
    })

})

ruta.get('/:codigo', (req,res)=>{
    const {codigo} =  req.params;
    comida  =  comidas.filter(c=>c.codigo === codigo);
    if (comida.length>0)
    {
        res.status(200).send({
            message:`Dato encontrado`,
            response:comida[0]
        })
    }
    else
    {
        res.status(400).send({
            message:`Comida con ese código no existe`
        })
    }

})

app.use('/comida', ruta);
app.listen(PUERTO, ()=>{
    console.log(`Servidor funcionando en http://localhost:${PUERTO}`)
})