const noOfLines=require('./3_firstIO');
describe('3_firstIO.js',()=>{
    it('should return the number of lines in a program whose path is given in command line argument',()=>{
        process.argv=['node','3_firstIO.js','./tiger.txt'];
        expect(noOfLines()).toEqual(5);
    });
    it('should return the number of lines in a program whose path is given in command line argument',()=>{
        process.argv=['node','3_firstIO.js','./3_firstIO.js'];
        expect(noOfLines()).toEqual(14);
    });
    it('should not return anything other than the number of lines',()=>{
        process.argv=['node','3_firstIO.js','./tiger.txt'];
        expect(noOfLines()).not.toEqual(13);
    });
    it('should return "Error in file name" if there is no filename or filename is error ',()=>{
        process.argv=['node','3_firstIO.js',];
        expect(noOfLines()).toEqual('Error in file name');
    });
    it('should return "0" if there is no content in file ',()=>{
        process.argv=['node','3_firstIO.js','empty.js'];
        expect(noOfLines()).toEqual(0);
    });
}
);