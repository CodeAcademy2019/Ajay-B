require('es6-promise');

let func=()=>{
    let promise = new Promise(function (fulfill, reject) {
      fulfill('PROMISE VALUE');
    });
    promise.then(
        result => console.log(result)
    );
    console.log('MAIN PROGRAM');
    return promise;
}
//func();
module.exports=func;