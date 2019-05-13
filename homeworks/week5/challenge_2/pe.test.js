const pe = require('./pe');

describe('pk', () => {
  it('should return correct answer when n = 6', () => {
    expect(pe('OX', 'X')).toBe('NO');
  });
  it('should return correct answer when n = 7', () => {
    expect(pe('OOO', 'XXX')).toBe('A');
  });
  it('should return correct answer when n = 220', () => {
    expect(pe('OOOOO', 'OOOOO')).toBe('NO');
  });
  it('should return correct answer when OXXXX XXX', () => {
    expect(pe('OXXXX', 'XXX')).toBe('NO');
  });
  it('should return correct answer when n = 17296', () => {
    expect(pe('OOO', 'XX')).toBe('NO');
  });
  it('should return correct answer when n = 18416', () => {
    expect(pe('', '')).toBe('NO');
  });
  it('should return correct answer when n = 365084', () => {
    expect(pe('O', 'X')).toBe('NO');
  });
  it('should return correct answer when n = 280540', () => {
    expect(pe('XXXX', 'OXOX')).toBe('B');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe('OXXX', 'OOO')).toBe('B');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe('XXXXXXXXXX', 'XXXXXXXXXX')).toBe('NO');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe('XXOOO', 'OXXX')).toBe('A');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe('OXOXOXOXOXOX', 'OXOXOXOXOXOX')).toBe('NO');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe('OOOOOOOOOOOOX', 'OOOOOOOOOOOOO')).toBe('B');
  });
  it('should return correct answer when n = 1043096', () => {
    expect(pe('OOOOOOOOOOOOOOO', 'OOOOOOOOOOOOOOX')).toBe('A');
  });
});
