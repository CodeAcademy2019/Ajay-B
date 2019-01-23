let fs=require('fs');
let pathModule=require('path');
//let callback=(list)=>{console.log(list)};
let getExtensions=(files)=>{
    let requiredFiles=[];
    files.filter(x=>{
        //console.log(extension);
        return pathModule.extname(x)==='.'+process.argv[3];

    }).map((a)=>{
        requiredFiles.push(a);
        console.log(a);
    });
    return requiredFiles;
    //console.log(requiredFiles);
}
let filterFiles=(callback)=>{
    let path=process.argv[2];
    let extension=process.argv[3];
    //let requiredFiles=[];
    fs.readdir(path,(err,data)=>{
        if(err){
            console.log('Error in file path');
        }else{
            callback(getExtensions(data));
            
        }
    })
}
//filterFiles(callback);
//console.log(getExtensions(['1.txt','2.txt','3.js']));
module.exports={filterFiles,getExtensions};