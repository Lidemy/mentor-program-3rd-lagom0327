const pb = require('./pb');

describe('hw2', () => {
  it('should return correct answer when 4283603960972820480 2589445492194308095', () => {
    expect(pb('4283603960972820480', '2589445492194308095')).toBe('Unfair');
  });
  it('should return correct answer when 0 0', () => {
    expect(pb('0', '0')).toBe('Fair');
  });
  it('should return correct answer when 168954259022020096 1259570089942637696', () => {
    expect(pb('168954259022020096', '1259570089942637696')).toBe('Fair');
  });
  it('should return correct answer when 922107635525788799 60333162627435008', () => {
    expect(pb('922107635525788799', '60333162627435008')).toBe('Unfair');
  });
  it('should return correct answer when 1 1769985927665350655', () => {
    expect(pb('0000000001', '1769985927665350655')).toBe('Fair');
  });
  it('should return correct answer when 1 1769985927665350655', () => {
    expect(pb('01000000', '001000000')).toBe('Fair');
  });
  it('should return correct answer when 1 1769985927665350655', () => {
    expect(pb('012345676', '12345675')).toBe('Unfair');
  });
  it('should return correct answer when 1 1769985927665350655', () => {
    expect(pb('012345674', '12345675')).toBe('Fair');
  });
  it('should return correct answer when 1 1769985927665350655', () => {
    expect(pb('153', '232')).toBe('Fair');
  });
});
