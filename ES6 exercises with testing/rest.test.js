var rest=require('./rest.js');

/*describe('Finds the average of variable number of arguments',()=>{
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
    
})*/
var toEqual={
    comment:['"rest.js" finds the average of variable number of arguments'],
    inputs:[[1,2,3,4,5],[100,45,6,78,9,23,47,1]],
    outputs:[3,39]
}
var notToEqual={
    comment:['rest.js" should not output anything other than the average of the given numbers'],
    inputs:[[1,2,3,4,5],[100,45,6,78,9,23,47,1]],
    outputs:[2,100]
}
var i=0;
describe('use of destructuring',()=>{
    
    it(toEqual.comment.toString(),()=>{
        for(i=0;i<toEqual.inputs.length;i++){
            process.argv = ['node','destructuring.js',...toEqual.inputs[i]];
            //console.log(process.argv)
            expect(rest(...toEqual.inputs[i])).toEqual(toEqual.outputs[i]); }
    })
    it(notToEqual.comment.toString(),()=>{
        for(i=0;i<notToEqual.length;i++){
            process.argv = ["node","destructuring.js",...notToEqual.inputs[i]];
            expect(rest(...notToEqual.inputs[i])).not.toEqual(notToEqual.outputs[i]); }
    })

})