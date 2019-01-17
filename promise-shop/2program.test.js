
const fn=require('./2program.js');
describe('"2program.js" waits for 300ms and then prints "FULFILLED!"',()=>{
    it('should print "FULFILLED!" on resolving',()=>{
        expect.assertions(1);
        return expect(fn.promise).resolves.toBe('FULFILLED!');
    });
    /*it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(fn()).rejects.toEqual('FULLFILLED!');
    });*/
})
jest.useFakeTimers();
describe('"2program.js" waits for 300ms and then prints "FULFILLED!"',()=>{
    it('if setTimeout() is called once ',()=>{
        fn.check();
       
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    it('if setTimeout() is called with 300ms',()=>{
        fn.check();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
})
