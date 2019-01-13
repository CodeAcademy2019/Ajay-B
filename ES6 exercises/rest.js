/*function addAll(){
    var argsArray= Array.prototype.slice.call(arguments);
    console.log(argsArray);
    return argsArray.reduce((x,y)=>x+y);
}
console.log(addAll(1,2,3,4,5));*/

module.exports = function average(...numbers) {
    var sum =numbers.reduce((x,y)=> x+y,0);
    //console.log(sum/numbers.length);
    return sum/numbers.length;
};
//average(1,2,3);