const first=()=>{
    return Promise.resolve('random value');
}
const second=(arg)=>arg+'2';
let firstPromise = first();

let secondPromise = firstPromise.then(val=>second(val));

secondPromise.then(val=>console.log(val));

// As an alternative to the code above, you could also do this:
// first().then(second).then(console.log);
module.exports={firstPromise,secondPromise}