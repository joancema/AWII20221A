const servidor  = require('./src/app')

servidor.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de cliente 
    corriendo en puerto ${process.env.PORT}`);
})