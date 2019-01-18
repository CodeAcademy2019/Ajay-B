const parsePromised=(input)=> {
     return new Promise( (fulfill, reject)=> {
      try {
        fulfill(JSON.parse(input));
      } catch (e) {
        reject(e.message);
      }
    });
  }
  
const onReject=(error)=>console.log(error.message);
let promise;
let main=(json)=>{
    promise=parsePromised(json)
    promise.then(console.log, onReject);
    return promise;
}
//main('{"firstName":"Ajay", "lastName":"Balaji"}');
module.exports=main;