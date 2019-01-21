const noOfLines=require('./4_firstAsyncIO');
describe('getExtensions',()=>{
    it('should return the files with the given extensions',()=>{
        expect(noOfLines.getLength('1\n2\n3\n')).toEqual(3);
    })
    it('should not return anything other than the number of lines in the given string',()=>{
        expect(noOfLines.getLength('1\n2\n3\n')).not.toEqual('3');
    })
})
describe('readFile',()=>{
    it('should return the number of lines in a program whose path is given in command line argument',(done)=>{
        process.argv=['node','4_firstAsyncIO.js','./tiger.txt'];

        let callback=(value)=>{
            //console.log('string');
            expect(value).toEqual(5);
            done();
        }
        noOfLines.readFile(callback);
    });
    it('should return the number of lines in a program whose path is given in command line argument',(done)=>{
        process.argv=['node','4_firstAsyncIO.js','./3_firstIO.js'];
        let callback=(value)=>{
            expect(value).toEqual(15);
            done();        }
        noOfLines.readFile(callback);
    });
    it('should not return anything other than the number of lines',(done)=>{
        process.argv=['node','4_firstAsyncIO.js','./tiger.txt'];
        let callback=(value)=>{
            expect(value).not.toEqual(13);
            done();
        }
        noOfLines.readFile(callback);
    });
    xit('should return "Error while reading" if there is no filename or filename is error ',(done)=>{
        process.argv=['node','4_firstAsyncIO.js',];
        let callback=(value)=>{
            expect(value).toEqual('Error while reading');
            done();
        }
        noOfLines.readFile();    
    });
    it('should return "0" if there is no content in file ',(done)=>{
        process.argv=['node','4_firstAsyncIO.js','empty.js'];
        let callback=(value)=>{
            expect(value).toEqual(0);
            done();
        }
        noOfLines.readFile(callback);
    });
}
);