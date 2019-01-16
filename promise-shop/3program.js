require('es6-promise');

let reject=()=>{
    let promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout(()=>reject(new Error('REJECTED!')),300);
    });
    let onReject=(error)=>console.log(error.message);
    promise.then(
        result => console.log(result), 
        error => onReject(error) 
    );
    return promise;
}
//reject();
module.exports=reject;