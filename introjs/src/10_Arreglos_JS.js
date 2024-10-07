const carros=['Ferrari', 'Nissan GTR', 'MC Laren', 'Mercedes GLC', 'Camaro'];

carros.push('Mustang GT500', 'Challenger', 'Lamborgini');

//onsole.log(carros);

const num=[10,5,6,12,20];
num.push(12,231,34,24,2455);

//console.log(num);

//iterar carros
carros.forEach(carro => console.log(carro));

for (const car of carros){
    console.log(car);
}

//iterar de acuerdo al tamaño del arreglo
for (let i=0; i<carros.length;i++){
    const elem=carros[i];
    console.log('i'+elem);
}