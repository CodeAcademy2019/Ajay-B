let userArray = process.argv.slice(2);
let info={};    
[,info.username,info.email]=userArray;
console.log(info);