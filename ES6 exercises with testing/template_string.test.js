
var template_strings=require('./template_strings.js');

/*describe('use of template string',()=>{
    it('outputs a string including variables in a single template string without using "," or "+"',()=>{
        process.argv = ["node","template_string.js","Logan"];
        expect(template_strings()).toEqual(`Hello, Logan!\nYour name lowercased is "logan".`)
    });
    it('outputs a string including variables in a single template string without using "," or "+"',()=>{
        process.argv = ["node","template_string.js","Alex Baldwin"];
        expect(template_strings()).toEqual(`Hello, Alex Baldwin!\nYour name lowercased is "alex baldwin".`)
    });
    //Input is not a string
    it('outputs a string including variables in a single template string without using "," or "+"',()=>{
        process.argv = ["node","template_string.js",123];
        expect(template_strings()).toEqual("Input is not a string");
    });
})*/
var toEqualParam={
    comment:['"template-string.js" outputs a string including variables in a single template string without using "," or "+"'],
    inputs:['Logan',' ','Alex Baldwin','LOGAN']
}
var toEqualInputs=['Logan',' ','Alex Baldwin','LOGAN'];
var notToEqual={
    comment:['"template-string.js" outputs a string including variables in a single template string without using "," or "+"'],
    inputs:['LoGan','Paull']
}
var i=0;
describe('use of template string',()=>{
    
        it(toEqualParam.comment.toString(),()=>{
            for(i=0;i<toEqualParam.inputs.length;i++){
                process.argv = ["node","template_string.js",toEqualParam.inputs[i]];
                expect(template_strings()).toEqual(`Hello, ${toEqualParam.inputs[i]}!\nYour name lowercased is "${toEqualParam.inputs[i].toLowerCase()}".`); }
        })
        it(notToEqual.comment.toString(),()=>{
            for(i=0;i<notToEqual.length;i++){
                process.argv = ["node","template_string.js",notToEqual.inputs[i]];
                expect(template_strings()).not.toEqual(`Hello, ${toEqualParam.inputs[i]}!\nYour name lowercased is "${toEqualParam.inputs[i].toLowerCase()}".`); }
        })
   
})