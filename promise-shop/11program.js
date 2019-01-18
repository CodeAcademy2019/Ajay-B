let getPromise1=()=> Promise.resolve('Promise1');
let getPromise2= ()=>Promise.resolve('promise2');
var counter=0;
var output=[];
function all(p1, p2) {
    return new Promise(function (fulfill, reject) {
      let out = [];
  
      p1.then((val)=> {
        out[0] = val;
        counter++;
  
        if (counter >= 2) {
          fulfill(out);
        }
      });
  
      p2.then((val)=> {
        out[1] = val;
        counter++;
  
        if (counter >= 2) {
          fulfill(out);
        }
      });
    });
  }
  
const promise=all(getPromise1(), getPromise2())
    .then(val=>{console.log(val);return val;});
module.exports={output,promise}