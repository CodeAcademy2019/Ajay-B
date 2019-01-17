let parsePromised=(input)=> {
     return new Promise( (fulfill, reject)=> {
      try {
        fulfill(JSON.parse(input));
      } catch (e) {
        reject(e);
      }
    });
  }
  
  let onReject=(error)=>console.log(error.message);
  parsePromised(process.argv[2]).then(null, onReject);
