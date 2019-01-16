require('es6-promise');

var fulfill=()=>{
    let promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout(()=>fulfill('FULFILLED!'),300);
    });
    promise.then(
        result => console.log(result), 
        error => console.log(error) // doesn't run
    );
    return promise;
}
//fulfill();
module.exports=fulfill;