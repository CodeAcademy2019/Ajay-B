require('es6-promise');

const check=(fulfill, reject)=>{
    setTimeout(()=>reject(new Error('REJECTED!')),300)
}

const promise = new Promise(check);
let onReject=(error)=>console.log(error.message);
promise.then(
    result => console.log(result), 
    error => onReject(error) 
);

//reject();
module.exports={check,promise};