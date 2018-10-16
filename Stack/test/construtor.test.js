const Stack = require('../constructor');

test('stack push', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.size).toBe(3);
});

test('stack pop', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toBe(3);
  expect(stack.size).toBe(2);
});

test('stack isEmpty', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);

  stack.push(1);
  stack.push(2);
  expect(stack.isEmpty()).toBe(false);
});