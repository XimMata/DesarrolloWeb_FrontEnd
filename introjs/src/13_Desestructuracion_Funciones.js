const carro={
    marca: 'Seat',
    modelo: 'Fr',
    anio: 2018,
    nombre: 'Leon'
}

//desestructura el objeto de la funcion en la creacion de la funcion
const detalle = ({marca, modelo, nombre})=>{
    //const {marca, modelo, nombre}=carrito;
    console.log(`El vahiculo de la marca ${marca} es modelo ${modelo} y su nombre es ${nombre}`);
}

detalle(carro);