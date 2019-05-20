const pe = require('./pe');

describe('Amicable Pair', () => {
  it('should return correct answer when 3 11 6', () => {
    expect(pe('3 11 6')).toBe(4);
  });
  it('should return correct answer when n = 2 12 47', () => {
    expect(pe('2 12 47')).toBe('IMPORTANT');
  });
  it('should return correct answer when 1 1000000000 1000000000', () => {
    expect(pe('1 1000000000 1000000000')).toBe('IMPORTANT');
  });
  it('should return correct answer when 2 473038165 597007', () => {
    expect(pe('2 473038165 597007')).toBe(793);
  });
  it('should return correct answer when 2 326051437 392289611', () => {
    expect(pe('2 326051437 392289611')).toBe(1);
  });
  it('should return correct answer when 26239573 472312314 1', () => {
    expect(pe('26239573 472312314 1')).toBe('IMPORTANT');
  });
  it('should return correct answer when 4221 4221 7076', () => {
    expect(pe('4221 4221 7076')).toBe(2);
  });
  it('should return correct answer when 1174 53431949 1175', () => {
    expect(pe('1174 53431949 1175')).toBe(45475);
  });
});
