jest.useFakeTimers();
const fn=require('./1program.js');
describe('"1program.js" waits for 300ms and then prints "TIMED OUT"',()=>{
    it('if setTimeout() is called once ',()=>{
        fn.main();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
    it('if setTimeout() is called with 300ms',()=>{
        fn.main();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    it('should not print anything other than "TIMED OUT!"',()=>{
        //fn.main();
        expect(fn.printStatement()).not.toEqual('TIMED!');
    });
    
})
