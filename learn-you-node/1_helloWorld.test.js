const helloWorld=require('./1_helloWorld');
describe('1_helloWorld.js',()=>{
    it('should return "HELLO WORLD"',()=>{
        expect(helloWorld()).toEqual('HELLO WORLD');
    });
    it('should not return anything other than "HELLO WORLD"',()=>{
        expect(helloWorld()).not.toEqual('HELLOWORLD');
    });
}
);