const servidor  = require('./src/app')

servidor.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de usuarios 
    corriendo en puerto ${process.env.PORT}`);
})