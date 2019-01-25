const httpClient=require('./7_httpClient');
describe('"httpClient.js"',()=>{
    it('should return "hello" on passing the below URL',()=>{
        let callback=(value)=>{
            expect(value).toEqual('hello');
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpClient('http://localhost:7002/hello',callback);
    })

    it('should return "world" on passing the below URL',()=>{
        let callback=(value)=>{
            expect(value).toEqual('world');
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpClient('http://localhost:7002/world',callback);
    })
    it('should return "world" or "hello" on passing the URL based on the path' ,()=>{
        let callback=(value)=>{
            expect(value).not.toEqual('worl');
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpClient('http://localhost:7002/hello',callback);
    })
    it('should return an error on passing the URL that doesnot exist' ,()=>{
        let callback=(value)=>{
            expect(value).toEqual('host unavailable');
        }
        //process.argv=['node','7_httpClient.js','http://localhost:7002/hello'];
        httpClient('http://localhost:7004',callback);
    })
})

