
const promiseTest=require('./3program.js');
describe('promise',()=>{
    it('should print "REJECTED!" on rejecting',()=>{
        return expect(promiseTest.promise).rejects.toThrowError('REJECTED');
    });
    it('should not print "REJECTED!" on resolving',()=>{
        return expect(promiseTest.promise).rejects.not.toEqual('REJECTED!');
    });
})
