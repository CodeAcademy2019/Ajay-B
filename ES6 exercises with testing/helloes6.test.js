var hello=require('./helloes6.js');

describe('helloes6 should print "HELLO ES6"',()=>{
    it('helloes6 should print "HELLO ES6"',()=>{
        expect(hello()).toEqual('HELLO ES6');
    });
    it('helloes6 should print "HELLO ES6"',()=>{
        expect(hello()).not.toEqual('HELLO ES5');
    });
    
}) 