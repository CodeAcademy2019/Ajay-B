
const fn=require('./3program.js');
describe('"3program.js" waits for 300ms and then prints "REJECTED!"',()=>{
    it('should print "REJECTED!" on rejecting',()=>{
        expect.assertions(1);
        return expect(fn.promise).rejects.toThrowError('REJECTED');
    });
    /*it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(fn()).rejects.toEqual('FULLFILLED!');
    });*/
})
jest.useFakeTimers();
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
