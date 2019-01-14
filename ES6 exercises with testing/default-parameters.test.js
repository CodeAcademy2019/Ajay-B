var defaultParam=require('./default-parameters.js');

describe('Finds the mid point of two points',()=>{
    it('All positive integers',()=>{
        //process.argv = ["node","rest.js",1, 2,3,4,5];
        expect(defaultParam(5,4)).toEqual(4.5);
    });
    it('null values',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(defaultParam(5,null)).toEqual("Warning!Input contains null");
    });
    it('input includes string',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(defaultParam(5,'ab')).toEqual("Warning!Input contains String");
    });
    
})