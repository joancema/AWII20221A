const persona={
    nombre:"Homero",
    apellido:"Simpson",
    esDocente: true,
    geolocalizacion:{
        lat:234.234234,
        lng:34.3453453,
    },
    getNombreCompleto: ()=>{
        return `${this.nombre} ${this.apellido}`
    },
    getNombreCompleto2: function(){
        return `${this.nombre} ${this.apellido}`
    },
    
}

 this.nombre='john';
 this.apellido='cevallos';
// console.log(persona.getNombreCompleto())


//  console.log(persona.getNombreCompleto())
//  console.log(persona.getNombreCompleto2())


function mostrarDatos({ nombre, apellido, geolocalizacion: { lat, lng }, getNombreCompleto, getNombreCompleto2 })
{
    this.nombre='prueba'
    this.apellido='prueba2'
    // console.log(nombre)
    // console.log(apellido)
    // console.log(lat)
    // console.log(lng)
    console.log(getNombreCompleto())
    console.log(getNombreCompleto2())

}

 mostrarDatos(persona)