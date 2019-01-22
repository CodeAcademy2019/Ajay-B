const promiseTest=require('./4program.js');
describe('"4program.js"  prints "I FIRED!" to show that promises resolve only one time',()=>{
    it('should  print "I FIRED!" on resolving',()=>{
        return expect(promiseTest).resolves.toEqual('I FIRED!');
    });
    it('should  print "I FIRED!" on resolving',()=>{
        return expect(promiseTest).resolves.not.toThrowError('I DID NOT FIRE!');
    });
    
})