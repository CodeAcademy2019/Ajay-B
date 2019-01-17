require('es6-promise');

let promises=()=>{
    let promise = new Promise(function (fulfill, reject) {
      // Your solution here
      fulfill('I FIRED');
      reject(new Error('I DID NOT FIRE'));
    });
    let onReject=(error)=>console.log(error.message);

    promise.then(
        result => console.log(result), 
        error => onReject(error) 
    );
return promise;
}
//promises();
module.exports=promises;