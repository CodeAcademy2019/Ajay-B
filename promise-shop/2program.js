//console.log(1);
const check = (fulfill, reject) => {
  // setTimeout(()=>{
  fulfill('FULFILLED!');// },300);
  //console.log(4);
};
//console.log(2);
const promise = new Promise(check);


promise.then((result) => {
  //console.log(6);
  console.log(result);
});
//console.log(5);
// fulfill();
module.exports = { promise, check };
