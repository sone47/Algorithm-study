const Steque = require('../Steque');

const queue = new Steque(5);

test('enqueue', () => {
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.size).toBe(2);
  expect(queue.isEmpty()).toBe(false);
});

test('dequeue', () => {
  queue.enqueue(3);
  queue.enqueue(4);
  expect(queue.size).toBe(4);
  expect(queue.dequeue()).toBe(1);
  expect(queue.size).toBe(3);
});

test('test full', () => {
  queue.enqueue(4);
  queue.enqueue(5);
  expect(queue.size).toBe(5);
  queue.enqueue(6);
  expect(queue.size).toBe(5);
});