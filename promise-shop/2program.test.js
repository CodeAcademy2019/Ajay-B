jest.useFakeTimers();
const fn=require('./2program.js');
describe('"2program.js" waits for 300ms and then prints "FULFILLED!"',()=>{
    it('if setTimeout() is called once ',()=>{
        fn();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    it('if setTimeout() is called with 300ms',()=>{
        fn();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    it('should print "FULFILLED!" on resolving',()=>{
        expect(fn()).resolves.toEqual('FULLFILLED!');
        /*return fn().then((data) => {
            expect(data).toBe('FULFILLED!');
          });*/
    });
    it('should not print "FULFILLED!" on rejecting',()=>{
        expect(fn()).rejects.not.toEqual('FULLFILLED!');
    });
})