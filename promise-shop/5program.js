const storeOutput=[]
const promiseExecute= (val) => {
    storeOutput.push(val)
}
const promiseConstructor= (fulfill, reject) => {
    fulfill('PROMISE VALUE');
};
const mainFunc= () => {
    const promise = new Promise(promiseConstructor);
    const finalPromise = promise.then(promiseExecute).then(() => storeOutput);
    promiseExecute('MAIN PROGRAM');
    return finalPromise;
}
//console.log(mainFunc());
module.exports=mainFunc;