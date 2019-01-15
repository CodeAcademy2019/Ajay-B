
var destructure=require('./destructuring.js');

/*describe('Destructuring',()=>{
    it('outputs username and email',()=>{
        process.argv = ["node","destructuring.js",1, "jdoe", "jdoe@example.com", "John", "Doe"];
        expect(destucture()).toEqual(`{"username":"jdoe","email":"jdoe@example.com"}`)
    });
    it('If required fields contain integer',()=>{
        process.argv = ["node","destructuring.js",1, 1, "jdoe@example.com", "John", "Doe"];
        expect(destucture()).toEqual(`Warning!Username or password is an Integer`)
    });
    
})*/
var toEqual={
    comment:['"destructuring.js" outputs username and email after destructuring the object'],
    inputs:[[1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'],[1, 'alex', 'jb@example.com', 'peter', 'Doe']],
    outputs:[`{"email":"jdoe@example.com","username":"jdoe"}`,`{"email":"jb@example.com","username":"alex"}`]
}
var notToEqual={
    comment:['"destructuring.js" outputs username and email if the format of object is not followed correctly'],
    inputs:[[ "jdoe", "jdoe@example.com", "John", "Doe"]],
    outputs:['input format is not correct']
}
var i=0;
describe('use of destructuring',()=>{
    
        it(toEqual.comment.toString(),()=>{
            for(i=0;i<toEqual.inputs.length;i++){
                process.argv = ['node','destructuring.js',...toEqual.inputs[i]];
                //console.log(process.argv)
                expect(destructure()).toEqual(toEqual.outputs[i]); }
        })
        it(notToEqual.comment.toString(),()=>{
            for(i=0;i<notToEqual.length;i++){
                process.argv = ["node","destructuring.js",...notToEqual.inputs[i]];
                expect(destructure()).not.toEqual(notToEqual.outputs[i]); }
        })
   
})