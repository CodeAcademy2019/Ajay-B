function doubleAll(numbers) {
    // SOLUTION GOES HERE
    numbers=[1,2,3]
    var double=[]
    double= numbers.map(function(x){ x*2})
    return double;
  }
  doubleAll()

  module.exports = doubleAll