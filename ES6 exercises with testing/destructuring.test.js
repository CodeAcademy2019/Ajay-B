
var destucture=require('./destructuring.js');

describe('Destructuring',()=>{
    it('outputs username and email',()=>{
        process.argv = ["node","destructuring.js",1, "jdoe", "jdoe@example.com", "John", "Doe"];
        expect(destucture()).toEqual(`{"username":"jdoe","email":"jdoe@example.com"}`)
    });
    it('If required fields contain integer',()=>{
        process.argv = ["node","destructuring.js",1, 1, "jdoe@example.com", "John", "Doe"];
        expect(destucture()).toEqual(`Warning!Username or password is an Integer`)
    });
    
})