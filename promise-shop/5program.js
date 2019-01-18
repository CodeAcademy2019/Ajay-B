let promise;
let main=()=>{
promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
});
let x='';
promise.then(
    result => {console.log(result);
     x=result}
);
console.log('MAIN PROGRAM');
x='MAIN PROGRAM'
return x;
}
main();
module.exports={promise,main};