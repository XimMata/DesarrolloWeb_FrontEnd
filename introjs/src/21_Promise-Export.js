import {findCarByID} from './data/carros'

findCarByID(2).then((json)=>{
    console.log(json);
    console.log('Realizado con exito');
}).catch((error)=>{
    console.error(error);
});