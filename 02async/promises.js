const platos=[
    {
        id:1,
        descripcion:'Encebollado',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion:'Ceviche',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Tigrillo',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Tostadas',
        idrestaurante:2,
    },

 ]
 const restaurantes=[
     {
        id:1,
        nombre:'La carreta de Tono',
     },
     {
        id:2,
        nombre:'Miguelito Restaurant',
     },
 ]

 function buscarPlatoPorId(id)
 {
     return new Promise((resolve, reject)=>{
        const plato =  platos.find((plato)=> plato.id=== id);
        if (!plato)
        {
            const error= new Error();
            error.message=`El plato con id ${id} no pudo ser encontrado`;
            reject(error);
        }
        resolve(plato);

     })

 }
 function asociarRestauranteAPlato(plato)
{
    return new Promise((resolve,reject)=>{
        const restaurante =  restaurantes.find((restaurante)=> restaurante.id===plato.idrestaurante);
        if (!restaurante)
        {
            const error= new Error();
            error.message=`El restaurante con id ${id} no pudo ser encontrado`;
            reject(error)
        }
        plato.restaurante= restaurante;
        delete plato.idrestaurante;
        resolve(plato);
    })
}
//  function buscarRestaurantePorId(id)
// {
//     return new Promise((resolve,reject)=>{
//         const restaurante =  restaurantes.find((restaurante)=> restaurante.id===id);
//         if (!restaurante)
//         {
//             const error= new Error();
//             error.message=`El restaurante con id ${id} no pudo ser encontrado`;
//             reject(error)
//         }
//         resolve(restaurante);
//     })
// }

// let platoAuxiliar={};

buscarPlatoPorId(2)
.then((plato)=>{
    // console.log(plato)
    // platoAuxiliar= plato;
    // return buscarRestaurantePorId(plato.idrestaurante);
    return asociarRestauranteAPlato(plato)
})
.then((plato)=>{
    console.log(plato)
})
// .then((restaurante)=>{
//     platoAuxiliar.restaurante= restaurante;
//     delete platoAuxiliar.idrestaurante;
//     console.log(platoAuxiliar)
// })
.catch((motivo)=>{
    console.log(motivo.message)
})



//  buscarRestaurantePorId(23)
//  .then((restaurante)=>{
//      console.log(restaurante)
//  })
//  .catch((motivo)=>{
//     console.log(motivo.message)
//  })