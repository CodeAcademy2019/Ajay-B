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
var toEqual={
    comment:['"default-parameters2.js" outputs a string which has exclamations equal to the length of input'],
    inputs:[['',5],[]],
    outputs:['!!!!!','Hi!!']
}
var notToEqual={
    comment:['"default-parameters2.js" should not output anything other than a string which has exclamations equal to the length of input'],
    inputs:[['',5]],
    outputs:['Hi!!']
}
var i=0;
describe('use of default parameters',()=>{
    
    it(toEqual.comment.toString(),()=>{
        for(i=0;i<toEqual.inputs.length;i++){
            //process.argv = ['node','default-parameters2.js',...toEqual.inputs[i]];
            //console.log(process.argv)
            expect(defaultParam(...toEqual.inputs[i])).toEqual(toEqual.outputs[i]); }
    })
    it(notToEqual.comment.toString(),()=>{
        for(i=0;i<notToEqual.length;i++){
            //process.argv = ['node','default-parameters2.js',...notToEqual.inputs[i]];
            expect(defaultParam(...notToEqual.inputs[i])).not.toEqual(notToEqual.outputs[i]); }
    })

})
