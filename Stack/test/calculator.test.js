const calculator = require('../calculator');

test('test simple calculator.', () => {
  expect(calculator('1+2')).toBe(3);
});

test('test calculator with multiply and division.', () => {
  expect(calculator('1+2*3-4/2*2')).toBe(3);
});