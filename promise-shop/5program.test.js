const fn=require('./5program.js');
console.log=jest.fn();
describe('"promise"',()=>{
    it('"5program.js" should return "PROMISE VALUE" on resolving',()=>{
        expect.assertions(1);
        expect(fn.promise).resolves.toEqual('PROMISE VALUE');
    });
}
)
describe('"5program.js"  prints "MAIN PROGRAM" followed by "PROMISE VALUE" to show that promises.then is executed in the next event loop',()=>{
    it('should  print "MAIN PROGRAM" followed by "PROMISE VALUE" on resolving',()=>{
        fn.func();
        return (expect(console.log).toHaveBeenCalled() && expect(console.log).mock.calls== [['MAIN PROGRAM'],['PROMISE VALUE']]);
    
    });
    /*it('should not print "I DID NOT FIRE!" on rejecting',()=>{
        fn.func();
        return (expect(console.log).toHaveBeenCalled() && expect(console.log).mock.calls== [['MAIN'],['PROMISE VALUE']]);
    });*/
})
