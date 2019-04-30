const add = require('./hw5');

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
});
