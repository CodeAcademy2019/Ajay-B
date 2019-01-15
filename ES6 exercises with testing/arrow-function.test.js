var arrow=require('./arrow-function1.js');

/*describe('use of arrow functions',()=>{

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
    
})*/
var toEqual={
    comment:['"arrow-function1.js" outputs a string that is concatenation of the first letter of all program arguments'],
    inputs:[['Hello', 'Arrow', 'Function'],['Hello' ,' ' ,'Function'],['Abc','Efg','hif']],
    outputs:['HAF','H F','AEh']
}
var notToEqual={
    comment:['"arrow-function.js" outputs a string that is concatenation of the first letter of all program arguments'],
    inputs:[['Hello', 'Arrow', 'Function']],
    outputs:['Haf']
}
var i=0;
describe('use of arrow function',()=>{
    
        it(toEqual.comment.toString(),()=>{
            for(i=0;i<toEqual.inputs.length;i++){
                process.argv = ['node','arrow-function.js',...toEqual.inputs[i]];
                //console.log(process.argv)
                expect(arrow()).toEqual(toEqual.outputs[i]); }
        })
        it(notToEqual.comment.toString(),()=>{
            for(i=0;i<notToEqual.length;i++){
                process.argv = ["node","arrow-function.js",...notToEqual.inputs[i]];
                expect(arrow()).not.toEqual(notToEqual.outputs[i]); }
        })
   
})