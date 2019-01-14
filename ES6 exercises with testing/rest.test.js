var rest=require('./rest.js');

describe('Finds the average of variable number of arguments',()=>{
    it('All integers',()=>{
        //process.argv = ["node","rest.js",1, 2,3,4,5];
        expect(rest(1,2,3,4,5)).toEqual(3);
    });
    it('not all integers',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(rest(10, 2,35,'abc',5)).toEqual("Warning!Input contains String");
    });
    it('input includes null',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(rest(10, 2,35,null,5)).toEqual("Warning!Input contains null");
    });
    
})