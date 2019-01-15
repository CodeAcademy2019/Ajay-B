var spread=require('./spread.js');

/*describe('Finds the minimum of variable number of arguments',()=>{
    it('All integers',()=>{
        process.argv = ["node","spreadjs",1, 2,3,4,5];
        expect(spread()).toEqual(1);
    });
    it('not all integers',()=>{
        process.argv = ["node","spread.js",10, 2,35,'abc',5];
        expect(spread()).toEqual("minimum is calculated excluding the strings. The minimum is 2");
    });
    
})*/
var toEqual={
    comment:['"spread.js" outputs the minimum of variable number of arguments'],
    inputs:[[1,2,3,4,5],[100,45,6,78,9,23,47]],
    outputs:[1,6]
}
var notToEqual={
    comment:['"spread.js" should not output anything other than the minimum number'],
    inputs:[[1,2,3,4,5],[100,45,6,78,9,23,47]],
    outputs:[3,100]
}
var i=0;
describe('use of destructuring',()=>{
    
        it(toEqual.comment.toString(),()=>{
            for(i=0;i<toEqual.inputs.length;i++){
                process.argv = ['node','destructuring.js',...toEqual.inputs[i]];
                //console.log(process.argv)
                expect(spread()).toEqual(toEqual.outputs[i]); }
        })
        it(notToEqual.comment.toString(),()=>{
            for(i=0;i<notToEqual.length;i++){
                process.argv = ["node","destructuring.js",...notToEqual.inputs[i]];
                expect(spread()).not.toEqual(notToEqual.outputs[i]); }
        })
   
})