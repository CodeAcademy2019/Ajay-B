function duckCount() {
  //console.log(arguments);
  return Array.prototype.slice.call(arguments).filter((obj)=> {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}
/*const notDuck = Object.create({quack:true});
//console.log(notDuck.prototype);
//notDuck.quack=true;
//console.log(notDuck);
const duck = {quack: true};
console.log(duck);
console.log(duckCount(duck, notDuck));
console.log(Object.prototype.hasOwnProperty.call(notDuck,'quack'));*/
module.exports = duckCount;