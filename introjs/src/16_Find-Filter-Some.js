const carros=[
    {
        id:1,
        marca: 'Seat',
        modelo: 'Fr',
        anio: 2018,
        nombre: 'Leon',
        cliente:{
            name:'Daniel',
            apellido:'Morales'
        }
    },
    {
        id:2,
        marca: 'Seat',
        modelo: 'Excellence',
        anio: 2018,
        nombre: 'Arona',
        cliente:{
            name:'Dýlan',
            apellido:'Mata'
        }
    },
    {
        id:3,
        marca: 'Cupra',
        modelo: 'Cupra',
        anio: 2018,
        nombre: 'Ateca',
        cliente:{
            name:'Misael',
            apellido:'Lomas'
        }
    },
    {
        id:4,
        marca: 'Cupra',
        modelo: 'Cupra',
        anio: 2018,
        nombre: 'Formentor',
        cliente:{
            name:'Ximena',
            apellido:'Mata'
        }
    },
];

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
const carroPorNombre=carros.find(i=>i.nombre==='Formentor')

console.log(carroPorNombre);

//filter
const carroFilter=carros.filter(i=>i.id==1)

console.log(carroFilter);

//some
const carroSome = carros.some(i=>i.cliente.name==='Ximena')
console.log(carroSome);