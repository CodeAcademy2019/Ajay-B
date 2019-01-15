function destructure(){
    let userArray = process.argv.slice(2);
    if(userArray.length<5){
        return 'input format is not correct';
    }
    let info={};    
    [,username,email]=userArray;
    info.email=email;
    info.username=username;
    
    if([,info.username,info.email].filter(x=>typeof(x)!=='string').length!==0){
        return `Warning!Username or password is an Integer`;
    }
    console.log(info);
    return JSON.stringify(info);
}
module.exports=destructure;