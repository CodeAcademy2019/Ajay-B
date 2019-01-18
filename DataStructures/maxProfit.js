let i=0;
let findMaxProfit=(stack)=>{
    let cumulativeProfit=[];
    cumulativeProfit.push(10-stack[0]);
    //console.log('gg',stack.length);
    for(let i=1;i<stack.length;i++){
        cumulativeProfit.push(cumulativeProfit[i-1]+10-stack[i]);
    }
    console.log(cumulativeProfit)
    return Math.max(...cumulativeProfit);
}
const main=(testArray)=>{
    if (testArray[i]!==0){
        let j;
        let maxProfitPerStack=[];
        console.log(testArray[i]);
        for(j=i;j<i+testArray[i];j++){
            //console.log(testArray[j+1][0]);
            maxProfitPerStack.push(findMaxProfit(testArray[j+1]));
        }
        console.log('profit',maxProfitPerStack);
        maxProfitPerStack=maxProfitPerStack.filter(x=>x>0);
        return (maxProfitPerStack.reduce((x,y)=>x+y));
    }
    else{
        console.log('No more input');
        return 0;
    }
}
//console.log(main([2,[1,2,3],[1,2,3]]));
console.log(main([4,[16,14,12,15,17,18,1,1,1,1],[20,20,10,10,8,18,17,1,1,1],[1, 2, 3, 4, 15, 14, 13, 12, 11, 10, 20, 19, 18, 17, 16],[ 1, 1, 18, 17, 1]]));
module.exports=main;
