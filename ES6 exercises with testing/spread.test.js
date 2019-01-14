var spread=require('./spread.js');

describe('Finds the minimum of variable number of arguments',()=>{
    it('All integers',()=>{
        process.argv = ["node","spreadjs",1, 2,3,4,5];
        expect(spread()).toEqual(1);
    });
    it('not all integers',()=>{
        process.argv = ["node","spread.js",10, 2,35,'abc',5];
        expect(spread()).toEqual("minimum is calculated excluding the strings. The minimum is 2");
    });
    
})