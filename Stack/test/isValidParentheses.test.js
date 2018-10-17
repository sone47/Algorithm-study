const isValidParentheses = require('../isValidParentheses');

test('valid parenthese match', () => {
  expect(isValidParentheses('[()]{}{[()()]()}')).toBe(true);
});

test('invalid parenthese match', () => {
  expect(isValidParentheses('[(]')).toBe(true);
});