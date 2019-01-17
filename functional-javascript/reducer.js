function countWords(arr) {
    return arr.reduce(function(distinct, word) {
      if (distinct[word]>0){
        distinct[word] = distinct[word]+1
      }else{
        distinct[word] = 1
      }  
      return distinct;
    }, {})
  }
  
  module.exports = countWords
  