const http = require('http');
/* eslint no-console: "log" */
let callback=(message)=>{
  console.log(message);
}

let main=(url,callback)=> http.get(url, (response) => {
  response.setEncoding('utf8');

  const data = '';
  response.on('data', (chunk) => {
    callback(chunk);
  });
  /* (response.on('end', function () {
        console.log(data);
    }); */
  response.on('error', (error) => {
    callback(error.message);
  });
}).on('error', (error) => {
  callback('host unavailable');
});
main('http://localhost:7004',callback);
module.exports=main;
