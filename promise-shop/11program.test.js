const multiple_promises= require('./11program');
/*describe('promise', () => {
    it('getPromise1() should print promise1 on resolving', () => {
        return expect(multiple_promises.promise1).resolves.toEqual('Promise1');
    });
    it('getPromise2() should print promise1 on resolving', () => {
        return expect(multiple_promises.promise2).resolves.toEqual('Promise2');
    });
    /*it('should get rejected and give error message', () => {
        return expect(throwError({"Task":"Datastructures"})).rejects.toEqual('Unexpected token o in JSON at position 1');
    });
});*/
describe('check console output', ()=> {
    it('should print output of promise1 and promise2 in order', () => {
            return expect(multiple_promises.promise).resolves.toEqual( ["Promise1", "promise2" ]);
    });    
    it('should not output anything other than  ["Promise1", "promise2" ]', () => {
        return expect(multiple_promises.promise).resolves.not.toEqual( "Promise1", "promise2" );
});
});
