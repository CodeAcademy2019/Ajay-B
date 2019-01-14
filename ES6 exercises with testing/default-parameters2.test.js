var defaultParam=require('./default-parameters2.js');

describe('outputs a string which has exclamations equal to the length of input',()=>{
    it('Integer',()=>{
        //process.argv = ["node","rest.js",1, 2,3,4,5];
        expect(defaultParam()).toEqual("Hi!!");
    });
    it('not all integers',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(defaultParam("",y=5)).toEqual("!!!!!");
    });
    
})