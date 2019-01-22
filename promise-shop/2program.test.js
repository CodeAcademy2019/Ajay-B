
const promiseTest=require('./2program.js');
describe('promise',()=>{
    
    it('should print "FULFILLED!" on resolving',()=>{
         //promiseTest.promise;
        //expect.assertions(0);
        //const a= expect(1);
        //console.log(a);
       // throw new Error('some error');
        return expect( promiseTest.promise).resolves.toEqual('FULFILLED!');
    });
    it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(promiseTest.promise).resolves.not.toEqual('FULLFILLED!');
    });
})
