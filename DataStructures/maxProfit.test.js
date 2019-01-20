const maxProfit= require('./maxProfit.js');
describe('maxProfit', () => {
    it('Manish:should return maximum profit and the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([4,[16,14,12,15,17,18,1,1,1,1],[20,20,10,10,8,18,17,1,1,1],[1, 2, 3, 4, 15, 14, 13, 12, 11, 10, 20, 19, 18, 17, 16],[ 1, 1, 18, 17, 1]])).toEqual([52,[16]]);
    });
    it('Ashrene:should return maximum profit and the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([3,[3,2,1,3,10,12,2],[12, 13, 14 ,15, 2 ,3],[1, 2, 3]])).toEqual([62,[16]]);
    });
    it('Gurehmat:should return maximum profit and the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([2,[8,1,9,15, 3, 6, 10],[7, 2, 14, 10]])).toEqual([29,[8,9]]);
    });
    it('Shashwath:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([3,[4,6 ,7 ,12, 15, 4, 11],[5, 9, 8, 12, 6, 7, 14, 6, 10],[10, 5 ,6 ,7 ,12, 17, 10, 8, 12 ,10 ,9]])).toEqual([ 38, [ 13, 15, 16 ] ]);
    });
    it('Gurehmat:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([1,[5 ,13 ,8 ,7 ,11, 9, 2, 10, 11, 13]])).toEqual([15,[7,8]]);
    });
    xit('Hemanth:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([3,[19 ,9 ,2],[20,11,10,7,1],[18 ,2]])).toEqual([1,[5,7,8,10]]);
    });
    xit('Yash:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([2,[1,2,3 ,10, 15, 5],[15 ,5 ,15 ,5 ,15, 5]])).toEqual([24, [3 ,4 ,6 ,8 ,10, 12]]);
    });

    
});