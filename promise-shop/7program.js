const first=()=>{
    return Promise.resolve('random value');
}
const second=(arg)=>arg+'2';

let firstPromise = first();

let secondPromise = firstPromise.then(val=>second(val));

secondPromise.then(val=>console.log(val));


module.exports={firstPromise,secondPromise}