const httpCollect=require('./8_httpCollect');
describe('"8_httpCollect.js"',()=>{
    it('should return the content length and content("hello") on passing the below URL',()=>{
        let callback=(value)=>{
            expect(value).toEqual([5,'hello']);
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpCollect('http://localhost:7002/hello',callback);
    })

    it('should return content length and content("world") on passing the below URL',()=>{
        let callback=(value)=>{
            expect(value).toEqual([5,'world']);
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpCollect('http://localhost:7002/world',callback);
    })
    it('should not return content length and content("world") on passing the below URL' ,()=>{
        let callback=(value)=>{
            expect(value).not.toEqual('world');
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpCollect('http://localhost:7002/hello',callback);
    })
    it('should return an error on passing the URL that doesnot exist' ,()=>{
        let callback=(value)=>{
            expect(value).toEqual('host unavailable');
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpCollect('http://localhost:7004',callback);
    })
})

