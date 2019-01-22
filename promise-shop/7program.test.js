const promiseTest=require('./7program.js');
describe('promise after promise',()=>{
    it('first promise  should print "random value" ',()=>{
        return expect(promiseTest.firstPromise).resolves.toEqual('random value');
    });
}
)
describe('promise after promise',()=>{
    it('"second promise should print "random value2" ',()=>{
        return expect(promiseTest.secondPromise).resolves.toEqual('random value2');
    });
    /*it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(fn()).rejects.toEqual('FULLFILLED!');
    });*/
}
)