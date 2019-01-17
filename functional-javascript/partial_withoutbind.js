//we cannot use arrow function without parameters here as it doesnt have arguments object 
function logger(namespace) {
  return (...args)=> {
    console.log.apply(this, [namespace].concat(Array.prototype.slice.call(args)))
  }
}

//let info = logger('INFO:');
//info('this is an info message');
module.exports = logger;