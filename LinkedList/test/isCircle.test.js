const LinkedList = require('../constructor');
const isCircle = require('../isCircle');

test('test linked-list isCircle: not a circle', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(2, 1);
  list.insert(3, 2);
  list.insert(4, 3);
  list.insert(5, 4);
  list.insert(6, 5);

  expect(isCircle(list)).toBe(false);
});

test('test linked-list isCircle: is a circle', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(2, 1);
  list.insert(3, 2);
  list.insert(4, 3);
  list.insert(5, 4);
  list.insert(6, 5);

  const node = list.findByValue(4);
  const tail = list.findByValue(6);
  tail.next = node;

  expect(isCircle(list)).toBe(true);
});