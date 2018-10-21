const josephus = require('../josephus');

test('', () => {
  expect(josephus(7, 1)).toBe(6);
  expect(josephus(7, 2)).toBe(6);
  expect(josephus(7, 3)).toBe(3);
  expect(josephus(7, 5)).toBe(5);
  expect(josephus(7, 7)).toBe(4);
  expect(josephus(7, 8)).toBe(3);
});