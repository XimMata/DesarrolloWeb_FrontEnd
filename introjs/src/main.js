import {carroPorID} from './data/carros'

const promise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const test = carroPorID(2);
        console.log(test);
        console.log('En espera de una promesa.');
    }, 3000);
});

