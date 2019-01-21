let fs=require('fs');
/*let callback=(value)=>{
    console.log(value);
    //return value;
}*/
let getLength=(str)=>{
    str=str.split('\n');
    //callback(str.length-1);
    return str.length-1;
}
let readFile=(callback)=>{
    fs.readFile(process.argv[2],'utf-8',(err,data)=>{
    if(err){
        console.log('Error while reading');
    }else{
        //getLength(data); 
        callback(getLength(data));  
    }
    }
)
}
//readFile(callback);
module.exports={readFile,getLength};