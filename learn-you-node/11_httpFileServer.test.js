const fileContent = require('./testClient');

describe('main', () => {
  it('should send file contents at http URL', (done) => {
   let callback=(data)=> {
      expect(data).toEqual('this is a test file');
      done();
    }
    process.argv = ['node', '7_httpClient.js', 'http://localhost:7002'];
    fileContent(callback);
  });
  it('should not send anything other than file contents at http URL', (done) => {
    let callback=(data)=> {
        expect(data).toEqual('This is for second test');
        done();
      }
    process.argv = ['node', '7_httpClient.js', 'http://localhost:7003'];
    fileContent(callback);
  });
});