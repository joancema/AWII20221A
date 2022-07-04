import './style.css'
import axios from 'axios'
import { IResProducto, Producto  } from './interfaces/IProducto'

const httpAxios= axios.create({
  baseURL:`http://localhost:2500/v1/sextoa/api/`
})


const app = document.querySelector<HTMLDivElement>('#app')!

//#region 
const etiqueta = document.createElement("label");
etiqueta.textContent=`ID`
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
//#endregion

app.appendChild(etiqueta);
app.appendChild(input);

app.innerHTML += `
<label for='nombre' >Nombre</label><input id='nombre' />
<label for='estado' >Estado</label><input id='estado' />
<label for='precio' >Precio</label><input id='precio' />
<label for='costo' >Costo</label><input id='costo' />
<label for='stock' >Stock</label><input id='stock' />
<label for='minimo' >Mínimo</label><input id='minimo' />

<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>

<div id="cuerpo" />
`
//#region inicializar
const id = document.querySelector<HTMLInputElement>('#id')!
const nombre = document.querySelector<HTMLInputElement>('#nombre')!
const precio = document.querySelector<HTMLInputElement>('#precio')!
const costo = document.querySelector<HTMLInputElement>('#costo')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const minimo = document.querySelector<HTMLInputElement>('#minimo')!
const estado = document.querySelector<HTMLInputElement>('#estado')!

const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar = document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
//#endregion

nuevo.addEventListener('click',()=>{
  id.value=""
  nombre.value=""
  precio.value=""
  costo.value=""
  stock.value=""
  minimo.value=""
  estado.value=""

})

consultar.addEventListener('click', async ()=>{
     const respproductos:IResProducto =  await (await httpAxios.get<IResProducto>('productos')).data
     console.log(respproductos);
     const { productos } = respproductos

     const tabla =  document.createElement('table');
     tabla.id="tabla"
     tabla.border="1"

     for ( const producto of productos )
     {
        const row = tabla.insertRow()
        const celda = row.insertCell()
        celda.innerHTML
        =` <button class="boton" value='${ producto._id }'>
         ${producto.nombre} </button>`;

        const celda2= row.insertCell()
        celda2.innerHTML = `${producto.precio}`
     }
     cuerpo.innerHTML=""
     cuerpo.appendChild(tabla)
     
     document.querySelectorAll('.boton').forEach( (ele : Element )  =>{

        ele.addEventListener('click',async ()=>
        {
          
          const {data }= await httpAxios.get<Producto>(`productos/${(ele as HTMLButtonElement ).value}`)
          console.log(data);
          nombre.value = data.nombre;
          precio.value = data.precio.toString();
          costo.value = data.costo.toString();
          minimo.value = data.minimo.toString();
          stock.value = data.stock.toString();
          estado.value = data.estado!.toString();
          id.value = data._id!

          
          // 
          
          
        })
      
     })
})

const asignarValores=()=>{
  const data:Producto  = {
    nombre: nombre.value,
    costo: Number(costo.value),
    precio: Number(precio.value),
    minimo: Number(minimo.value),
    stock: Number(stock.value),
  }
  return data;
}

grabar.addEventListener('click', async ()=>{
   const data =  asignarValores()
   if ( id.value.trim().length>0 )
   {
    const respproducto:Producto = await (await httpAxios.put<Producto>(`productos/${id.value}`,data )).data
    console.log(`El producto ${respproducto.nombre} fue modificado con éxito`);
    return;
   }
   try {
    const respproducto:Producto =  await (await httpAxios.post<Producto>(`productos`,data)).data
    console.log(`El producto ${respproducto.nombre} fue insertado con éxito`);
   } catch (error) {
      if (axios.isAxiosError(error))
      {
        console.log(`Error en axios`);
        
      }
      console.log(error);
          
   }
   

})


