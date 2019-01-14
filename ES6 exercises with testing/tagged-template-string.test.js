var tag=require('./tagged-template-string.js');

describe('Use of tagged template strings to log a safely-escaped HTML rendering of the comment',()=>{
    it('Html code',()=>{
        //process.argv = ["node","rest.js",1, 2,3,4,5];
        expect(tag([ '<b>', ' says</b>: "', '"' ],'Ian Hickson',
        'Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day.' )).toEqual('<b>Ian Hickson says</b>: "Speaking of which, we added the first draft of the &lt;canvas&gt; element to the Web Apps 1.0 draft proposal specification the other day."');
    });
    /*it('not all integers',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(rest(10, 2,35,'abc',5)).toEqual("Warning!Input contains String");
    });
    it('input includes null',()=>{
        //process.argv = ["node","spreadjs",10, 2,35,'abc',5];
        expect(rest(10, 2,35,null,5)).toEqual("Warning!Input contains null");
    });*/
    
})