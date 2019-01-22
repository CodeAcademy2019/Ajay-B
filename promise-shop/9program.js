const parsePromised=(input)=> {
     return new Promise( (fulfill, reject)=> {
      try {
        fulfill(JSON.parse(input));
      } catch (error) {
        reject('unable to parse');
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