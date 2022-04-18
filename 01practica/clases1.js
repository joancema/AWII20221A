const persona = {
    nombre:"John",
    apellido:"Cevallos",
    esEstudiante:true,
    geolocalizacion:{
        lat:12.23424,
        lng:14.234234
    },
    getNombreCompleto(){
        return this.nombre+this.apellido
    }
}