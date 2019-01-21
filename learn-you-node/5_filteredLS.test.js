const files=require('./5_filteredLS');
describe('getExtensions',()=>{
    it('should return the files with the given extensions',()=>{
        process.argv=['node','5_filteredLS.js','./','txt'];
        expect(files.getExtensions(['1.txt','2.txt','3.js'])).toEqual(['1.txt','2.txt']);
    })
    it('should return the files with the given extensions',()=>{
        process.argv=['node','5_filteredLS.js','./','js'];
        expect(files.getExtensions(['1.txt','2.txt','3.js'])).toEqual(['3.js']);
    })
})
describe('readFile',()=>{
    it('should return the files with the given extensions whose directory path is given in command line argument',(done)=>{
        process.argv=['node','5_filteredLS.js','./','txt'];

        let callback=(value)=>{
            //console.log('string');
            expect(value).toEqual(['tiger.txt']);
            done();
        }
        files.filterFiles(callback)
    });
    xit('should return "Error while reading" if there is no filename or filename is error ',(done)=>{
        process.argv=['node','4_firstAsyncIO.js',];
        let callback=(value)=>{
            expect(value).toEqual('Error while reading');
            done();
        }
        files.filterFiles(callback)    
    });
    it('should return "0" if there is no content in file ',(done)=>{
        process.argv=['node','5_filteredLS.js','','txt'];
        let callback=(value)=>{
            expect(value).toEqual(0);
            done();
        }
        files.filterFiles(callback)
    });
}
);