const multi = require('./multi');

describe('hw5', () => {
  it('should return correct answer when a=11 and b=999', () => {
    expect(multi('11', '999')).toBe('10989');
  });
  it('should return correct answer when a=1000 and b=999', () => {
    expect(multi('1000', '999')).toBe('999000');
  });
  it('should return correct answer when a=1 and b=1', () => {
    expect(multi('1', '1')).toBe('1');
  });
  it('should return correct answer when a=1 and b=1', () => {
    expect(multi('12312383813881381381', '129018313819319831')).toBe('1588522998763262033482659100127466611');
  });
  it('should return correct answer when a=1 and b=1', () => {
    expect(multi('0', '129018313819319831')).toBe('0');
  });
  it('should return correct answer when a=1 and b=1', () => {
    expect(multi('0', '0')).toBe('0');
  });
});
