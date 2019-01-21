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
    it('Hemanth:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([3,[19 ,9 ,2],[20,11,10,7,1],[18 ,2]])).toEqual([1,[5,7,8,10]]);
    });
    it('Yash:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([2,[1,2,3 ,10, 15, 5],[15 ,5 ,15 ,5 ,15, 5]])).toEqual([24, [3 ,4 ,5,6,7 ,8,9 ,10, 12]]);
    });
    xit('Chirag:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([4,[3  ,4,  11,  9,  11,  9 , 11 , 12,  7,  14,  6],[16,17,18,19,1,7,5,3,3,11,12,8,9,13,12,11,11,11,2],[13,16,17],[3,13,13,21,11,12,9,7,5,4,5,12,13,5]])).toEqual([21, [12,14,16,18,19,20,21,22,23,24]]);
    });
    it('Abhinav:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([2,[7,3,10,9,10],[1,2,3,4,10,16,10,4]])).toEqual([ 41, [ 8, 9, 10, 12, 13 ] ]);
    });
    it('vibhore:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([2,[10 ,13 ,14 ,13, 1, 9],[6,11 ,7 ,15, 11, 8]])).toEqual([ 6, [ 3,4,9 ] ]);
    });
    it('Shreya:should return maximum profit and all possible values of the number of boxes required to gain maximum profit', () => {
        expect(maxProfit([2,[4,5 ,6 ,10 ,4],[9, 8, 7 ,4 ,9]])).toEqual([ 34, [ 10 ] ]);
    });

    
});