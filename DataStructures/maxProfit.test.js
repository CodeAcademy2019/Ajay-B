const maxProfit= require('./maxProfit.js');
describe('maxProfit', () => {
    it('should return maximum profit', () => {
        expect(maxProfit([4,[16,14,12,15,17,18,1,1,1,1],[20,20,10,10,8,18,17,1,1,1],[1, 2, 3, 4, 15, 14, 13, 12, 11, 10, 20, 19, 18, 17, 16],[ 1, 1, 18, 17, 1]])).toEqual(52);
    });
    it('should return maximum profit', () => {
        expect(maxProfit([3,[3,2,1,3,10,12,2],[12, 13, 14 ,15, 2 ,3],[1, 2, 3]])).toEqual(62);
    });
    it('should return maximum profit', () => {
        expect(maxProfit([2,[8,1,9,15, 3, 6, 10],[7, 2, 14, 10]])).toEqual(29);
    });
    
});