const http = require('http');
const bl = require('bl');

const results = [];
let count = 0;

const callback = (results) => {
  results.map(x => console.log(x));
  return results;
};


let main=(callback,urls)=>{
    const httpGet = (link, index) => {
  http.get(link, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }

      results[index] = data.toString();
      count++;

      if (count === 3) {
        //resultsInOrder(results);
        callback(results);
      }
    }));
  });
};


    for (let i = 0; i < 3; i++) {
        httpGet(urls[i], i);
    }
    //callback(results);
    
}
//main(callback,['http://localhost:7002/first','http://localhost:7002/second','http://localhost:7002/third']);
module.exports=main;