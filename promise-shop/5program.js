require('es6-promise');

let promise;
const func=()=>{
promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
});
promise.then(
    result => console.log(result)
);
console.log('MAIN PROGRAM');
}
func();
module.exports={promise,func};