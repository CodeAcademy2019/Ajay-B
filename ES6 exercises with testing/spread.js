function spread(){
    var numbers=process.argv.slice(2);
    var onlyNumbers=numbers.filter(x=>typeof(x)==='number');
    if(onlyNumbers.length!==numbers.length){
        return `minimum is calculated excluding the strings. The minimum is ${Math.min(...onlyNumbers)}`
    }
    var min= Math.min(...numbers);
    console.log(`The minimum of [${numbers}] is ${min}`);
    return min;
}
module.exports=spread;