import {carros, carroPorNombre} from './data/carros'

console.log(carros);

const marcasCarros=carros.map(i=>{
    return i.marca;
});

console.log(marcasCarros);

const nombresCarros=carros.map(i=>{
    return i.cliente.name;
});

console.log(nombresCarros);

//find
//const carroPorNombre=carros.find(i=>i.nombre==='Formentor')

console.log('Carro por nombre: ' );
console.log(carroPorNombre());

//filter
const carroFilter=carros.filter(i=>i.id==1)

console.log(carroFilter);

//some
const carroSome = carros.some(i=>i.cliente.name==='Ximena')
console.log(carroSome);