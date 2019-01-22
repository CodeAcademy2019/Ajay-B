const promiseTest=require('./6program.js');
describe('promise that rejects with an error',()=>{
    it('should throw error with message "REJECTED!" on rejecting',()=>{
        return expect(promiseTest).rejects.toThrowError('REJECTED!');
    });
    it('should not resolve',()=>{
        return expect(promiseTest).rejects.not.toEqual('FULLFILLED!');
    });
}
)