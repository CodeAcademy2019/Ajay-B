const module2 = require('./Module2');

const callback = (value) => {
  // value.map(x=>console.log(x));
  console.log(value);
};
const main = callback => module2(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    callback(err);
  } else {
    // data.map(x=>console.log);
    callback(data);
  }
});
main(callback);
module.exports = main;
