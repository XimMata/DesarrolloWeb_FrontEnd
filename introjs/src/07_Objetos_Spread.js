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
// carro.nombre='C8'
console.log(carro);

const salu=carro.saludo();
console.log(salu);
console.log(carro.totalInv());

//spread (clona la estructura de carro en carro 2 pero creando una nueva instancia)
const carro2={...carro }; 

const valida=carro2===carro;

console.log(valida);

carro2.id=20;
console.log(carro.id);
console.log(carro2.id);