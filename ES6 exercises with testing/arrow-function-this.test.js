var arrowThis=require('./arrow-function-this.js');

describe('Alternative way to bind',()=>{
    it('This returns the object property without using bind',()=>{
        expect(arrowThis.kick()).toEqual("Ouch!");
    });
    
})