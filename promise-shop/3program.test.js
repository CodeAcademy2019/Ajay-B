jest.useFakeTimers();
const fn=require('./3program.js');
describe('"3program.js" waits for 300ms and then prints "REJECTED!"',()=>{
    it('if setTimeout() is called once ',()=>{
        fn();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    it('if setTimeout() is called with 300ms',()=>{
        fn();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    it('should not print "REJECTED!" on resolving',()=>{
        expect(fn()).resolves.not.toEqual('FULLFILLED!');
        /*return fn().then((data) => {
            expect(data).toBe('FULFILLED!');
          });*/
    });
    it('should print "REJECTED!" on rejecting',()=>{
        expect(fn()).rejects.toEqual('REJECTED!');
    });
})