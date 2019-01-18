const attachTitle=(arg) => 'DR. '+arg;
const promise1=Promise.resolve('MANHATTAN')
const promise2=promise1.then(attachTitle)
promise2.then(console.log);
module.exports={promise1, promise2,attachTitle};