const throwError= require('./9program');
describe('promise', () => {
    it('should get resolved and gives JSON', () => {
        return expect(throwError('{"firstName":"Ajay", "lastName":"Balaji"}')).resolves.toEqual({"firstName": "Ajay", "lastName": "Balaji"});
    });
    it('should get rejected and give error message', () => {
        return expect(throwError({"Task":"Datastructures"})).rejects.toEqual('Unexpected token o in JSON at position 1');
    });
});