module.exports=()=>{
    let numArray=process.argv.slice(2);
    //console.log(arguments.reduce((x,y)=>Number(x)+Number(y)));
    return numArray.reduce((x,y)=>x+Number(y),0);
}