const { mean } = require('./notation');

describe('mean function', () => {
  test('calculates the mean of [10, 20, 30]', () => {
    expect(mean([10, 20, 30])).toBe(20);
  });

  test('calculates the mean of [5, 15, 25, 35]', () => {
    expect(mean([5, 15, 25, 35])).toBe(20);
  });

  test('returns 0 for empty array', () => {
    expect(mean([])).toBe(0);
  });

  test('returns 0 for invalid input', () => {
    expect(mean(null)).toBe(0);
    expect(mean(undefined)).toBe(0);
  });
});
