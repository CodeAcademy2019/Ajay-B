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
/*
let totalscore=0;
//let scoreForStrikeOrSpare=(firstThrow,secondThrow,nextFrameFirst,nextFrameSecond)
let rolls=(...args)=>{
    let scoreFrames=[];
    if(validateInput(args)){
        let i=0;
        for(i=0;i<args.length;i++){
            if(isStrike(args[i])){
                scoreFrames.push([args[i],args[i+1],args[i+2]]);
                //i+=1;
            }
            else if(isSpare(args[i],args[i+1])){
                scoreFrames.push([args[i],args[i+1],args[i+2]]);
                i+=1;
            }
            else{
                scoreFrames.push([args[i],args[i+1]]);
                i+=1;
            }
        }
    }
    console.log(scoreFrames);
    scoreFrames=scoreFrames.filter(x=>x.includes(undefined)!==true);
    console.log(scoreFrames.map(x=>x.reduce((a,b)=>a+b,0)).reduce((x,y)=>x+y,0));
    

}
//console.log(setOfValuesPerFrame(10,10,2,3));
rolls(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10)
rolls(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6);
rolls(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10);
rolls(6, 4, 3, 0, 10, 10,5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);*/
module.exports={validateInput,isStrike,isSpare,setOfValuesPerFrame,score};