function arrow_function1(){
    var inputs = process.argv.slice(2);
    //Input is not a string
    if(inputs.filter(x=>typeof(x)!=='string').length!==0){
        return `Input is not a string`;    
    }
var result = inputs.map(x=>x.charAt(0))
                    .reduce((x,y)=>x+y);
//console.log(`[${inputs}] becomes \"${result}\"`);
return (result);
}
module.exports=arrow_function1