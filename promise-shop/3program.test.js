
const promise_test=require('./3program.js');
describe('promise',()=>{
    it('should print "REJECTED!" on rejecting',()=>{
        return expect(promise_test.promise).rejects.toThrowError('REJECTED');
    });
    it('should not print "REJECTED!" on resolving',()=>{
        return expect(promise_test.promise).rejects.not.toEqual('REJECTED!');
    });
})
/*jest.useFakeTimers();
describe('"3program.js" waits for 300ms and then prints "REJECTED!"',()=>{
    it('if setTimeout() is called once ',()=>{
        fn.check();
       
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    it('if setTimeout() is called with 300ms',()=>{
        fn.check();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
})
*/