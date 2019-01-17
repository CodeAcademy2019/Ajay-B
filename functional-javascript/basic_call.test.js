var call=require('./basic_call.js');

describe('"basic_call.js" returns the count of objects that have a property directly defined on them',()=>{
    it('some directly and some indirectly defined objects',()=>{
        const notDuck = Object.create({quack:true});
        const duck = {quack: true};
        expect(call(notDuck,duck)).toEqual(1);
    });
    it('empty objects',()=>{
        const notDuck = Object.create(null);
        const duck = {};
        expect(call(notDuck,duck)).toEqual(0);
    });
    it('all directly defines objects',()=>{
        const notDuck = Object.create(null);
        notDuck.quack='true';
        const duck = {quack: true};
        expect(call(notDuck,duck)).not.toEqual(1);
    });
    
    
})