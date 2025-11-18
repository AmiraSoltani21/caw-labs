const { meanOfArray } = require('./fileimport');

describe('fileImport module', () => {
  test('calculates mean of an array correctly', () => {
    const arr = [10, 15, 18, 20, 13, 17];
    expect(meanOfArray(arr)).toBeCloseTo(15.5); 
  });
});
