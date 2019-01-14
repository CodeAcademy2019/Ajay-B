var arrow=require('./arrow-function1.js');

describe('use of arrow functions',()=>{

    it('outputs a string that is concatenation of the first letter of all program arguments',()=>{
        process.argv = ["node","arrow-function.js","Hello","Arrow","Fuctions"];
        expect(arrow()).toEqual(`HAF`)
    });
    //process.argv = ["node","arrow-function.js","Hello","arrow","fuctions"]
    it('outputs a string that is concatenation of the first letter of all program arguments',()=>{
        process.argv = ["node","arrow-function.js","Hello","arrow","fuctions"]

        expect(arrow()).toEqual(`Haf`)
    });
    it('outputs a string that is concatenation of the first letter of all program arguments',()=>{
        process.argv = ["node","arrow-function.js","Hello"," ","fuctions"]

        expect(arrow()).toEqual(`H f`)
    });
    it('outputs a string that is concatenation of the first letter of all program arguments',()=>{
        process.argv = ["node","arrow-function.js","Hello",12,34]

        expect(arrow()).toEqual(`Input is not a string`)
    });
    
})