
const asyncTest = require('./5program');
describe('promise', () => {
    it('should resolve to "PROMISE VALUE"', () => {
        const result = asyncTest();
        return expect(result).resolves.toEqual(['MAIN PROGRAM','PROMISE VALUE']);
    });
});