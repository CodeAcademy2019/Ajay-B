function destructure(){
    let userArray = process.argv.slice(2);
    let info={};    
    [,info.username,info.email]=userArray;
    if([,info.username,info.email].filter(x=>typeof(x)!=='string').length!==0){
        return `Warning!Username or password is an Integer`
    }
    console.log(info);
    return JSON.stringify(info);
}
module.exports=destructure;