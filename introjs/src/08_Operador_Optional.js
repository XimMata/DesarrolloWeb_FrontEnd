const carro = {
    id:1,
    nombre:'Corvette',
    date:new Date(),
    marca: {
        id:1,
        nombre: 'Chevrolet',
        ubi: 'USA',
        age: 113
    },
    inventarios: [
        {
            id:1,
            color:'Rojo',
            cantidad: 7,
            precio: 3500000
        },
        {
            id:2,
            color:'Azul',
            cantidad: 5,
            precio: 3100000
        },
        {
            id:3,
            color:'Amarillo',
            cantidad: 2,
            precio: 3520000
        },
    ],
    totalInv: function(){
        let total =0;
        this.inventarios.forEach(inventario=>{
            total = total + inventario.precio*inventario.precio;
        });
        return total;
    },
    costo: 3000000,
    saludo: function(){
        return `Hola ${this.nombre}`;
    }
}

if (carro.lugarProcedencia != undefined && carro.lugarProcedencia.name){
    console.log('cumple');
}
else{
    console.log('No existe lugar de procedencia');
}

//operador optional
console.log(carro.lugarProcedencia);
console.log(carro.lugarProcedencia?.name);