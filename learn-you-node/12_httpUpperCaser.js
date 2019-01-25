let http=require('http');
let map = require('through2-map');
const main=()=>{
http.createServer((request,response)=>{
    if(request.method!=='POST'){
        return response.end('Only POST method allowed');
    }
    request.pipe(map((chunk)=> {
        return chunk.toString().toUpperCase();
    })).pipe(response);
    //response.end();

}).listen(process.argv[2]);
}
main();
module.exports=main;