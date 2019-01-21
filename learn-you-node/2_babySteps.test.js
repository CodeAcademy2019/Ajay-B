const arraySum=require('./2_babySteps');
describe('2_babySteps.js',()=>{
    it('should return the sum of its command line arguments',()=>{
        process.argv=['node','2_babySteps.js','1','2','3','4','5'];
        expect(arraySum()).toEqual(15);
    });
    it('should return the sum of its command line arguments',()=>{
        process.argv=['node','2_babySteps.js','1','2','3','4','0'];
        expect(arraySum()).toEqual(10);
    });
    it('should not return anything other than the sum of its command line arguments',()=>{
        process.argv=['node','2_babySteps.js','1','2','3','4','0'];
        expect(arraySum()).not.toEqual(11);
    });
}
);