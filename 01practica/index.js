let variable =0
const constante = 12

const mostrarLista= (tope) =>
{
    for (let i=0;i< tope ;i++)
    {
        console.log(i)
        
    }
    
}

function llamarFuncionListado(fn, parametro)
{
    console.log(fn(parametro))
}
llamarFuncionListado(mostrarLista, 7)

