let validateInput=(...args)=>{
    if( args.filter(x=>x>10).length===0){
        return true;
    }else{
        return false;
    }
}
let isStrike=(first)=>{
    if (first===10){
        return true;
    }
    return false;
}
let isSpare=(first,second)=>{
    if(first+second===10){
        return true;
    }
    return false;
}
let setOfValuesPerFrame=(...inputs)=>{
    if(isStrike(inputs[0])){
        return ([[inputs[0],inputs[1],inputs[2]],0]);
    }
    else if(isSpare(inputs[0],inputs[1])){
        return ([[inputs[0],inputs[1],inputs[2]],1]);
    }
    else{
        return ([[inputs[0],inputs[1]],1]);
    }
    
}
let score=(scoreFrames)=>{
    scoreFrames=scoreFrames.filter(x=>x.includes(undefined)!==true);
    return scoreFrames.map(x=>x.reduce((a,b)=>a+b,0)).reduce((x,y)=>x+y,0);
   
}

let rolls=(...allRolls)=>{
    let scoreFrames=[];
    if(validateInput(allRolls)){
        let i=0;
        for(i=0;i<allRolls.length;i++){
            let framesAndSkip=setOfValuesPerFrame(allRolls[i],allRolls[i+1],allRolls[i+2],allRolls[i+3]);
            scoreFrames.push(framesAndSkip[0]);
            i+=framesAndSkip[1];
        }
    }
    return scoreFrames;
}
let main=(...args)=>{
    return(score(rolls(...args))); 
}    
//console.log(setOfValuesPerFrame(10,10,2,3));
/*console.log(main(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10));
console.log(main(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6));
rolls(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10);
rolls(6, 4, 3, 0, 10, 10,5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
*/
module.exports={validateInput,isStrike,isSpare,setOfValuesPerFrame,score,rolls};