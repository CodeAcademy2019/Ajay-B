function repeat(operation, num) {
    // SOLUTION GOES HERE
    if (num<=0){
        return;
    }
    
        repeat(operation,num-1)
    
    /*for (i=0;i<num;i++){
        operation()
    }*/
}

  // Do not remove the line below
  module.exports = repeat