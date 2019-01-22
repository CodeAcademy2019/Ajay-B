let validateInput=(...args)=>{
    let noofFrames=args.length/2;
    if( args.length/2===10){
        return noofFrames;
    }else{
        return 'Invalid number of frames';
    }
}
module.exports={validateInput};