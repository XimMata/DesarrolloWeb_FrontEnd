const carros=[
    {
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