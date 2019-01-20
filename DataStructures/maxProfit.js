let i=0;
let findMaxProfit=(stack)=>{
    let cumulativeProfit=[];
    cumulativeProfit.push(10-stack[0]);
    //console.log('gg',stack.length);
    for(let i=1;i<stack.length;i++){
        cumulativeProfit.push(cumulativeProfit[i-1]+10-stack[i]);
    }
    console.log(cumulativeProfit)
    let max=Math.max(...cumulativeProfit);
    let index=[]
    for(let i=0;i<cumulativeProfit.length;i++){
        if(cumulativeProfit[i]===max){
            index.push(i+1);
        }
    }
    console.log(index);
    return [Math.max(...cumulativeProfit),index];
}
const main=(testArray)=>{
    if (testArray[i]!==0){
        let j;
        let maxProfitPerStack=[];
        let index=[];
        console.log(testArray[i]);
        for(j=i;j<i+testArray[i];j++){
            //console.log(testArray[j+1][0]);
            maxProfitPerStack.push(findMaxProfit(testArray[j+1]));
            //maxProfitPerStack.push(profit);
            //index.push(indices);
        }
        console.log('profit and no of boxes',maxProfitPerStack);
        //console.log('indices',index);
        
        for(let i=0;i<maxProfitPerStack.length;i++){
            if(maxProfitPerStack[i][0]<0){
                maxProfitPerStack.splice(i,1)
            }
        }
        //maxProfitPerStack=maxProfitPerStack.filter(x=>x>=0);
        let comparator=(x,y)=>{
            return y[0]-x[0];
        }
        maxProfitPerStack=maxProfitPerStack.sort(comparator);
        
        console.log('profit & no of boxes',maxProfitPerStack);
        //console.log('indices',index);
        let totalMaxProfit=0;
        for(let i=0;i<maxProfitPerStack.length;i++){
            totalMaxProfit+=maxProfitPerStack[i][0];
        }
        //totalMaxProfit=maxProfitPerStack.reduce((x,y)=>x[0]+y[0]);
        let maxProfitTillNow=0;
        
        let totalNoOfBoxes=maxProfitPerStack[0][1].length;
        for(let i=1;i<maxProfitPerStack.length;i++){
            totalNoOfBoxes*=maxProfitPerStack[i][1].length;
        }
        let noOfBoxesTillNow=new Array(totalNoOfBoxes);
        //noOfBoxesTillNow=totalNoOfBoxes.map(x=>0);
        console.log(totalNoOfBoxes);
        for (let i=0;i<totalNoOfBoxes;i++){
            noOfBoxesTillNow[i]=0;
        }
        //console.log('j',maxProfitPerStack[0][1][0])
        //console.log(noOfBoxesTillNow);;
        for(let i=0;i<maxProfitPerStack.length;i++){
            //maxProfitTillNow+=maxProfitPerStack[i][0];
            let k=0;
            let j=totalNoOfBoxes/maxProfitPerStack[i][1].length;
            console.log('j',j);
            let m=0;
            let n=j;
            for(k=0;k<maxProfitPerStack[i][1].length;k++){
                for(m;m<n;m++){
                    noOfBoxesTillNow[m]+=maxProfitPerStack[i][1][k];
                    //j=j+1;
                }
                m=m+j-1;
                n=n+j;
                console.log(noOfBoxesTillNow);
            }
        }
        
        console.log('Boxes',noOfBoxesTillNow);
        return [totalMaxProfit,noOfBoxesTillNow];
    }
    else{
        console.log('No more input');
        return 0;
    }
}
//console.log(main([2,[1,2,3],[1,2,3]]));
/*2
3
3 10 10 1
5 10 1 10 1 10
4 5 15 10 5
*/

//console.log(main([4,[16,14,12,15,17,18,1,1,1,1],[20,20,10,10,8,18,17,1,1,1],[1, 2, 3, 4, 15, 14, 13, 12, 11, 10, 20, 19, 18, 17, 16],[ 1, 1, 18, 17, 1]]));
//console.log(main([3,[4,6 ,7 ,12, 15, 4, 11],[5, 9, 8, 12, 6, 7, 14, 6, 10],[10, 5 ,6 ,7 ,12, 17, 10, 8, 12 ,10 ,9]]));
//console.log(main([3,[19,9,2],[20,11,10,7,1],[18,2]]));
//Hermanth:console.log(main([3,[19 ,9 ,2],[20,11,10,7,1],[18 ,2]]));
console.log(main([3,[10,10,1],[10 ,1, 10, 1, 10],[5,15, 10, 5]]));
module.exports=main;
