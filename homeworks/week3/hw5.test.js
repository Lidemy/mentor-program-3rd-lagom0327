const add = require('./hw5.3');

describe('hw5', () => {
  it('should return correct answer when a=11 and b=999', () => {
    expect(add('11', '999')).toBe('1010');
  });
  it('should return correct answer when a=1000 and b=999', () => {
    expect(add('1000', '999')).toBe('1999');
  });
  it('should return correct answer when a=1 and b=1', () => {
    expect(add('1', '1')).toBe('2');
  });
  it('should return correct answer when a=12312383813881381381 and b=129018313819319831', () => {
    expect(add('12312383813881381381', '129018313819319831')).toBe('12441402127700701212');
  });
});
