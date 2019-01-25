let juglingAsyc=require('./9_jugglingAsync');
describe('9_jugglingAsync',()=>{
    it('should return data from url in the specific order',()=>{
       let callback=(results)=>{
        console.log('results',results);
        expect(results).toEqual(['first','second','third']);
       }
       //console.log('results',results);
       juglingAsyc(callback,['http://localhost:7002/first','http://localhost:7002/second','http://localhost:7002/third']);
    })
    it('should return data from url in the specific order',()=>{
        let callback=(results)=>{
         console.log('results',results);
         expect(results).toEqual(['first','third','second']);
        }
        //console.log('results',results);
        juglingAsyc(callback,['http://localhost:7002/first','http://localhost:7002/third','http://localhost:7002/second']);
     })
     it('should return data from url in the specific order',()=>{
        let callback=(results)=>{
         console.log('results',results);
         expect(results).not.toEqual(['first','second','third']);
        }
        //console.log('results',results);
        juglingAsyc(callback,['http://localhost:7002/first','http://localhost:7002/third','http://localhost:7002/second']);
     })
})
