const testCatch= require('./10program');
describe('promise', () => {
    it('should throw an error after incrementing counter to 5', () => {
        return expect(testCatch.alwaysThrows).toThrowError('OH NOES');
    });
    /*it('should get rejected and give error message', () => {
        return expect(throwError({"Task":"Datastructures"})).rejects.toEqual('Unexpected token o in JSON at position 1');
    });*/
});
describe('check console output', ()=> {
    it('should throw an error after incrementing counter to 5', () => {
            return expect(testCatch.console_output).toEqual([1, 2, 3, 4, 5, 'OH NOES']);
    });    
});

describe('iterate function', ()=> {
    it('should increment the argument passed by 1', () => {
            return expect(testCatch.iterate(1)).toEqual(2);
    });    
});