var logger=require('./partial_withoutbind.js');

describe('"partial_withbind.js" fixes the first argument to console.log',()=>{
    it('with namespace and one argument',()=>{
        let info = logger('INFO:');
        expect(info('this is an info message')).toEqual('INFO:this is an info message');
    });
    /*it('empty objects',()=>{
        const notDuck = Object.create(null);
        const duck = {};
        expect(call(notDuck,duck)).toEqual(0);
    });
    it('all directly defines objects',()=>{
        const notDuck = Object.create(null);
        notDuck.quack='true';
        const duck = {quack: true};
        expect(call(notDuck,duck)).not.toEqual(1);
    });*/
    
    
})