let qhttp = require('q-io/http');
//http://localhost:1337
const promise=qhttp.read("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
.then(function (json) {
  console.log(JSON.parse(json));
  return JSON.parse(json);
})
.then(null, console.error)

module.exports=promise;