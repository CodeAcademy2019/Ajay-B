let console_output=[];
let alwaysThrows=()=>{
    throw new Error('OH NOES');
}
let iterate=(int)=>{
    console_output.push(int);
    console.log(int);
    return int+1;
}
let onReject=(error)=>{
    console_output.push(error.message)
    console.log(error.message);
}

let promise=Promise.resolve(iterate(1))
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(alwaysThrows)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .catch(onReject)


module.exports={promise,console_output,iterate};