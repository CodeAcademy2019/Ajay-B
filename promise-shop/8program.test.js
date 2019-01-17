const fn=require('./8program.js');
describe('"attachTitle" should prepend "DR. "to its argument',()=>{
    it('"7program.js" calls function inside promise ',()=>{
        //expect.assertions(1);
        expect(fn.attachTitle('DoLittle')).toEqual('DR. DoLittle');
    });
}
)
describe('firstpromise should print "DR. MANHATTAN" on resolving ',()=>{
    it('promise should call attachTitle',()=>{
        expect.assertions(1);
        return expect(fn.promise).resolves.toEqual('MANHATTAN');
    }

    );
}

)
