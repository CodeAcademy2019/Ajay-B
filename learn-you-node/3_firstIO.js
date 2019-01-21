let fs = require('fs');
module.exports=()=>{
   
    //let buffer=fs.readFileSync('./tiger.txt');
    try{
        let buffer=fs.readFileSync(process.argv[2]);
        let strContent=buffer.toString();
        console.log(strContent.split('\n').length-1);
        return strContent.split('\n').length-1;
    }catch(err)  {
        console.log('Error in file name');
        return ('Error in file name');
    }
    
}
