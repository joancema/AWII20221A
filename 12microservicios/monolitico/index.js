const servidor  = require('./src/app')

servidor.listen(process.env.PORT || 3000, ()=>{
    console.log(`Servidor monolítico funcionando 
    en puerto ${process.env.PORT || 3000}`);
})