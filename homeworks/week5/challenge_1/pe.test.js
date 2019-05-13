const pe = require('./pe');

describe('Amicable Pair', () => {
  it('should return correct answer when n = 6', () => {
    expect(pe(6)).toBe('=6');
  });
  it('should return correct answer when n = 7', () => {
    expect(pe(7)).toBe('0');
  });
  it('should return correct answer when n = 220', () => {
    expect(pe(220)).toBe('284');
  });
  it('should return correct answer when n = 284', () => {
    expect(pe(284)).toBe('220');
  });
  it('should return correct answer when n = 17296', () => {
    expect(pe(17296)).toBe('18416');
  });
  it('should return correct answer when n = 18416', () => {
    expect(pe(18416)).toBe('17296');
  });
  it('should return correct answer when n = 365084', () => {
    expect(pe(365084)).toBe('280540');
  });
  it('should return correct answer when n = 280540', () => {
    expect(pe(280540)).toBe('365084');
  });
  it('should return correct answer when n = 998104', () => {
    expect(pe(998104)).toBe('1043096');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe(1043096)).toBe('998104');
  });
});
