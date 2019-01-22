let validateInput=(...args)=>{
    let noofFrames=args.length/2;
    if( args.length/2===10){
        return noofFrames;
    }else{
        return 'Invalid number of frames';
    }
}
let isStrike=(first)=>{
    if (first===10){
        return true;
    }
    return false;
}
//let scoreForStrikeOrSpare=(firstThrow,secondThrow,nextFrameFirst,nextFrameSecond)

module.exports={validateInput,isStrike};