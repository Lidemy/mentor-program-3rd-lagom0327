const stars = require('./hw1');

describe('hw1', () => {
  it('should return correct answer when n = 1', () => {
    expect(stars(1)).toEqual(['*']);
  });
  test('stars(3) =', () => {
    expect(stars(3)).toEqual(['*', '**', '***']);
  });
  test('stars(6) =', () => {
    expect(stars(6)).toEqual(['*', '**', '***', '****', '*****', '******']);
  });
});
