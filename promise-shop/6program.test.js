const fn=require('./6program.js');
describe('promise that rejects with an error',()=>{
    it('should throw error with message "REJECTED!" on rejecting',()=>{
        return expect(fn).rejects.toThrowError('REJECTED!');
    });
    it('should not resolve',()=>{
        return expect(fn).rejects.not.toEqual('FULLFILLED!');
    });
}
)