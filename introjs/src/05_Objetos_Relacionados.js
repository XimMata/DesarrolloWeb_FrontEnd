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
    costo: 3000000,
    saludo: function(){
        return `Hola ${this.nombre}`;
    }
}
// carro.nombre='C8'
console.log(carro);

const salu=carro.saludo();
console.log(salu);