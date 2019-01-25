const net = require('net');
const timeServer = require('./10_timeServer');
describe('checking time server', () => {
  it('should receive date from port', (done) => {
    function callback(data) {
      console.log(data.toString());
      expect(data.toString()).toEqual(timeServer.createDate());
      done();
    }
    const client = net.connect(3000);
    client.on('data', callback);
  });
  it('should not receive anything other than date from port', (done) => {
    function callback(data) {
      console.log(data.toString());
      expect(data.toString()).not.toEqual('string');
      done();
    }
    const client = net.connect(3000);
    client.on('data', callback);
  });
});