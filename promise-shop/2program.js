require('es6-promise');

const check= (fulfill, reject) =>{
    setTimeout(()=>fulfill('FULFILLED!'),300);
}
promise = new Promise(check);
promise.then(
    result => console.log(result), 
    error => console.log(error) // doesn't run
);

//fulfill();
module.exports={promise,check};