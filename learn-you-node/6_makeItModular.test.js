const moduleCode = require('./6_makeItModular');

describe('readFile', () => {
  it('should return the files with the given extensions whose directory path is given in command line argument', (done) => {
    process.argv = ['node', '6_makeItModular.js', './', 'txt'];
    const callback = (value) => {
      // console.log('string');
      expect(value).toEqual(['tiger.txt']);
      done();
    };
    moduleCode(callback);
  });
  it('should return "Invalid input" if there is no filename or filename is error ', (done) => {
    process.argv = ['node', '4_firstAsyncIO.js', './test/', 'txt'];
    const callback = (value) => {
      expect(value).toEqual('Invalid input');
      done();
    };
    moduleCode(callback);
  });
});
