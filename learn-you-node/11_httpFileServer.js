const http = require('http');
const fs = require('fs');
const callback = (data) => {
  console.log(data);
};
//process.argv[3]="Module2.js"
const main=(callback) =>{ 
  const server=http.createServer((request, response) => {
  const readStream = fs.createReadStream(process.argv[3]);
  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', () => {
    readStream.pipe(response);
  });
  readStream.on('error', (err) => {
    response.end(err);
  });
})
server.listen(process.argv[2]);
}
main(callback);
module.exports=main;
