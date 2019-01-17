const fn=require('./4program.js');
describe('"4program.js"  prints "I FIRED!" to show that promises resolve only one time',()=>{
    it('should  print "I FIRED!" on resolving',()=>{
        expect.assertions(1);
        return expect(fn).resolves.toEqual('I FIRED!');
    });
    /*it('should  print "I FIRED!" on resolving',()=>{
        expect.assertions(1);
        return expect(fn).rejectes.toThrowError('I DID NOT FIRE!');
    });*/
    
})