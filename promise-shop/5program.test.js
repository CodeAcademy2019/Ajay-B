const promise_test=require('./5program.js');
describe('"promise"',()=>{
    it('"5program.js" should return "PROMISE VALUE" on resolving',()=>{
        return expect(promise_test.promise).resolves.toEqual('PROMISE VALUE');
    });
}
)
describe('main',()=>{
    it('should  print "MAIN PROGRAM" before "PROMISE VALUE" on resolving',()=>{
        return expect(promise_test.main()).toEqual('MAIN PROGRAM');
    
    });
    /*it('should not print "I DID NOT FIRE!" on rejecting',()=>{
        fn.func();
        return (expect(console.log).toHaveBeenCalled() && expect(console.log).mock.calls== [['MAIN'],['PROMISE VALUE']]);
    });*/
})
