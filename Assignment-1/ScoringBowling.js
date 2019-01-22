let validateInput=(...args)=>{
    //let noofFrames=args.length/2;
    //array.filter
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
//let scoreForStrikeOrSpare=(firstThrow,secondThrow,nextFrameFirst,nextFrameSecond)
let rolls=(...args)=>{
    if(validateInput(args)){
        args
    }

}
module.exports={validateInput,isStrike,isSpare};