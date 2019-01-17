let attachTitle=(name)=>'DR. '+name;

let promise=Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(val=>console.log(val));