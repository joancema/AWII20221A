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



async function buscarPlatoPorId(id)
{
    const plato  = platos.find((plato)=> plato.id=== id);
    if (!plato)
    {
        const error= new Error();
        error.message=`El plato con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return plato;
}
function buscarRestaurantePorId(id)
{
    const restaurante =  restaurantes.find((restaurante)=> restaurante.id===id);
    if (!restaurante)
    {
        const error = new Error();
        error.message=`El restaurante con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return restaurante;
}



(async ()=> {
    try {
        const plato =   await buscarPlatoPorId(1);
        const restaurante = await buscarRestaurantePorId(plato.idrestaurante);
        plato.restaurante= restaurante;
        delete plato.idrestaurante;
        console.log(plato);
    } catch (error) {
        console.log(error.message)
    }
})();



