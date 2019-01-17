jest.useFakeTimers();
const fn=require('./4program.js');
describe('"4program.js"  prints "I FIRED!" to show that promises resolve only one time',()=>{
    it('should  print "I FIRED!" on resolving',()=>{
        expect(fn()).resolves.toEqual('I FIRED');
    });
    it('should not print "I DID NOT FIRE!" on rejecting',()=>{
        expect(fn()).rejects.not.toEqual('I DID NOT FIRE!');
    });
})