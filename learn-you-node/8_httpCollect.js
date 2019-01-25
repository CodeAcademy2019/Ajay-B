const http = require('http');
const bl = require('bl');
let callback=(value)=>{
    console.log(value);
}
/* eslint no-console: "log" */
let main=(url,callback)=>{http.get(url, (response) => {
  // response.pipe(bl(function (err, data) { /* ... */ }))
  response.pipe(bl((err, data) => {
    if (err) {
      callback(err.message);
    }
    data = data.toString();
    callback([data.length,data]);
  }));
}).on('error',(error)=>{
    callback('host unavailable');
});}
module.exports=main;