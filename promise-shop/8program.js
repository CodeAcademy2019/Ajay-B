const attachTitle=(name)=>'DR. '+name;

const promise=Promise.resolve('MANHATTAN');
//promise.then(val=>attachTitle(val)).then(val=>console.log(val));
promise.then(attachTitle).then(val=>console.log(val));
module.exports={promise,attachTitle}