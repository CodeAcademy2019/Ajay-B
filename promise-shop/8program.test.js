const promise_test=require('./8program.js');
describe('"attachTitle"',()=>{
    it('should prepend "DR. " to its argument',()=>{
        //expect.assertions(1);
        expect(promise_test.attachTitle('DoLittle')).toEqual('DR. DoLittle');
    });
}
)
describe('promise1',()=>{
    it('promise should output "MANHATTAN" on resolving',()=>{
        return expect(promise_test.promise1).resolves.toEqual('MANHATTAN');
    }

    );
})
describe('promise2',()=>{
    it('this promise should output "DR. MANHATTAN" on resolving',()=>{
        return expect(promise_test.promise2).resolves.toEqual('DR. MANHATTAN');
    }

    );
})
