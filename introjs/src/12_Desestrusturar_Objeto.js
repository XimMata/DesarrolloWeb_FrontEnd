const carro={
    marca: 'Seat',
    modelo: 'Fr',
    anio: 2018,
    nombre: 'Leon'
}

//const marca=carro.marca;

//desestructurar
const {marca, modelo, nombre}=carro;

console.log(carro.marca);
console.log(nombre);