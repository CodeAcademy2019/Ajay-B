require('es6-promise');


const promise = new Promise(function (fulfill, reject) {
     fulfill('I FIRED!')
     reject(new Error('I DID NOT FIRE'));
});
let onReject=(error)=>console.log(error.message);

promise.then(
    result => console.log(result), 
    error => onReject(error) 
);

//promises();
module.exports=promise;