const fn=require('./7program.js');
describe('"firstpromise" resolves and prints "random value"',()=>{
    it('"7program.js" calls promise after promise. This promise should print "random value" ',()=>{
        expect.assertions(1);
        return expect(fn.firstPromise).resolves.toEqual('random value');
    });
}
)
describe('"secomd promise" waits for 300ms and then prints "REJECTED!"',()=>{
    it('"7program.js" calls promise after promise. This promise should print "random value2" ',()=>{
        expect.assertions(1);
        return expect(fn.secondPromise).resolves.toEqual('random value2');
    });
    /*it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(fn()).rejects.toEqual('FULLFILLED!');
    });*/
}
)