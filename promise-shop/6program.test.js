const fn=require('./6program.js');
describe('"6program.js" throws an error "REJECTED!"',()=>{
    it('should print "REJECTED!" on rejecting',()=>{
        expect.assertions(1);
        return expect(fn).rejects.toThrowError('REJECTED!');
    });
    /*it('should not print "FULFILLED!" on rejecting',()=>{
        return expect(fn()).rejects.toEqual('FULLFILLED!');
    });*/
}
)