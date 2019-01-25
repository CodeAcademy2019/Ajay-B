//"YYYY-MM-DD hh:mm"
/*let net = require('net');
let addZero=(val)=>{
    return val<10?'0'+val : ''+val;
}
let server = net.createServer((socket)=> {
    let date = new Date();
    //socket.write('check');
    socket.end(`${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}\n`);
});
server.listen(7004);*/
const net = require('net');

const addZero = (val) => {
    return val<10?'0'+val : ''+val;
};
const callback = (res) => {
  console.log(res);
};
const createDate = () => {
  const date = new Date();
  const data = `${date.getFullYear()}-${
    addZero(date.getMonth() + 1)}-${
    addZero(date.getDate())} ${
    addZero(date.getHours())}:${
    addZero(date.getMinutes())}\n`;
  //console.log('data', data);
  return data;
};
const main = (callback) => {
  let data;
  const server = net.createServer((socket) => {
    data = createDate();
    socket.write(data);
    //socket.end();
  });
  server.listen(3000);
  //server.close();
};
main(callback);

module.exports ={main,createDate};