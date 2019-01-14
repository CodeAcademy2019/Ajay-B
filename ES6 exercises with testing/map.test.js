var map=require('./map.js');

describe('doubles the array',()=>{
    it('All integers',()=>{
        expect(map([1,2,3,4])).toEqual([2,4,6,8]);
    });
    
})