const clamp = require('../src/clamp');

describe('clamp', () => {
  // TODO: Put your tests here
  
  // Test that defaults are applied
  test('lower default is applied', () => {
    expect(clamp(-1)).toBe(0);
  });
  test('upper default is applied', () => {
    expect(clamp(2)).toBe(1);
  });
  test('within default values is not altered', () => {
    expect(clamp(0.5)).toBe(0.5);
  });

  // Test that lower clamps are applied
  test('new parameter lower clamp is working', () => {
    expect(clamp(-3, -4, 3)).toBe(-3);
    expect(clamp(7, 8, 9)).toBe(8);
    expect(clamp(17, 16, 18)).toBe(17);
  });

  // Test that upper clamps are applied
  test('new parameter upper clamp is working', () => {
    expect(clamp(-49, 13, -1)).toBe(-1);
    expect(clamp(13, 15, 19)).toBe(15);
    expect(clamp(219, 221, 220)).toBe(220);
  });
});