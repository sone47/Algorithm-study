const MaxPQ = require('../MaxPQ');

test('test insert', () => {
  const queue = new MaxPQ();

  queue.insert(4);
  queue.insert(5);
  queue.insert(2);
  queue.insert(6);

  expect(queue.queue).toEqual([null, 6, 5, 2, 4]);
});

test('test deleteMax', () => {
  const queue = new MaxPQ();

  queue.insert(4);
  queue.insert(5);
  queue.insert(2);
  queue.insert(6);

  expect(queue.queue).toEqual([null, 6, 5, 2, 4]);

  queue.delMax();
  expect(queue.queue).toEqual([null, 5, 4, 2]);
  queue.delMax();
  expect(queue.queue).toEqual([null, 4, 2]);
  queue.delMax();
  expect(queue.queue).toEqual([null, 2]);
  queue.delMax();
  expect(queue.queue).toEqual([null]);
  expect(queue.isEmpty()).toBe(true);
});