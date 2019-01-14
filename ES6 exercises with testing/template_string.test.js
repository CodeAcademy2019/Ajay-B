
var template_strings=require('./template_strings.js');

describe('use of template string',()=>{
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
})