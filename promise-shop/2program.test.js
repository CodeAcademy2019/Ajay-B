
const promise_test=require('./2program.js');
describe('promise',()=>{
    
    it('should print "FULFILLED!" on resolving',()=>{
        //promise_test.promise;
        //expect.assertions(0);
        //const a= expect(1);
        //console.log(a);
       // throw new Error('some error');
        expect(promise_test.promise).rejects;
    });
    /*it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(promise_test()).rejects.toEqual('FULLFILLED!');
    });*/
})
jest.useFakeTimers();
/*describe('"2program.js" waits for 300ms and then prints "FULFILLED!"',()=>{
    it('if setTimeout() is called once ',()=>{
        promise_test.check();
       
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    it('if setTimeout() is called with 300ms',()=>{
        promise_test.check();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
})*/
