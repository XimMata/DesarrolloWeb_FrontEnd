
export const carros=[
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

export const carroPorNombre=()=>{
    return carros.find(i=>i.cliente.name==='Ximena')
}