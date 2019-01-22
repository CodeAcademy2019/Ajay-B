let validateInput=(...args)=>{
    //let noofFrames=args.length/2;
    if( args.length===20||args.length===21){
        return true;
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
let isSpare=(first,second)=>{
    if(first+second===10){
        return true;
    }
    return false;
}
//let scoreForStrikeOrSpare=(firstThrow,secondThrow,nextFrameFirst,nextFrameSecond)
let rolls=(...args)=>{
    if(validateInput(args)===10){

    }

}
module.exports={validateInput,isStrike,isSpare};