jest.mock('../file-read', () => {
  return () => Promise.resolve('Some mock text');
});

jest.mock('../file-write', () => {
  return () => Promise.resolve('Some more mock text');
});

describe('file reader test', () => {
  const fileRead = require('../file-read');
  const fileWrite = require('../file-write');

  it('reads a file', () => {
    const source = './text.txt';

    return fileRead(source)
      .then(contents => {
        expect(contents).toEqual('Some mock text');
      });
  });

  it('write a file', () => {
    const source = './text.txt';

    return fileWrite(source)
      .then(contents => {
        expect(contents).toEqual('Some more mock text');
      });
  });
});
