let qhttp = require('q-io/http');
//http://localhost:1337
const promise=qhttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
  return JSON.parse(json);
})
.then(null, console.error)
.catch(error=>{
  console.log(error.message);
  return error.message;
});

module.exports=promise;