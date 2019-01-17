var scope=require('./scopes.js');

describe('"Scope.js" declares a variable with lexical scope',()=>{
    it('if it is declared',()=>{
        expect(scope()).toEqual(undefined);
    });
    it('if it is declared',()=>{
        expect(scope()).not.toEqual(null);
    });
    
    
})