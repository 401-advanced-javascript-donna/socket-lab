const capitalizer = require('../capitalizer');

describe('Capitalizer test', () => {
  it('capitalizes a string', () => {
    const str = 'twas brillig in the slithy toves...';
    const result = capitalizer(str);
    expect(result).toBe('TWAS BRILLIG IN THE SLITHY TOVES...');
  });
});