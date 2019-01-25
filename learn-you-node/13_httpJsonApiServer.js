const http = require('http');
const url = require('url');

const parsetime = time => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
});
const callback=(result)=>{
  console.log(JSON.stringify(result));
}
const unixtime = time => ({ unixtime: time.getTime() });

const main=(callback)=>{http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  // console.log('parsedUrl',parsedUrl);
  // console.log('parsedUrl',parsedUrl.query.iso);
  const time = new Date(parsedUrl.query.iso);
  let result;

  if ((parsedUrl.path).match('/api/parsetime') !== null) {
    result = parsetime(time);
  } else if ((parsedUrl.path).match('/api/unixtime') !== null) {
    result = unixtime(time);
  }
  callback(result);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
}).listen(5000);
}
main(callback);
module.exports=main;