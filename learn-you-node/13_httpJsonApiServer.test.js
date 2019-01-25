const jsonServer = require('./testClient');

describe('main', () => {
  it('should send file contents at http URL', (done) => {
   let callback=(data)=> {
      expect(data).toEqual('{"hour":17,"minute":40,"second":15}');
      done();
    }
    process.argv = ['node', 'testClient.js', 'http://localhost:5000/api/parsetime?iso=2013-08-10T12:10:15.474Z'];
    jsonServer (callback);
  });
  it('should not send anything other than file contents at http URL', (done) => {
    let callback=(data)=> {
        expect(data).toEqual('{"unixtime":1376136615474}');
        done();
      }
    process.argv = ['node', 'testClient.js', 'http://localhost:5000/api/unixtime?iso=2013-08-10T12:10:15.474Z'];
    jsonServer (callback);
  });
});