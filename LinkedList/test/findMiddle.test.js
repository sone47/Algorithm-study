const LinkedList = require('../constructor');
const findMiddle = require('../findMiddle');

test('test linked-list findMiddle: normal odd list', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(1);
  list.insert(3);
  list.insert(2);
  list.insert(5);

  expect(findMiddle(list)).toBe(3);
});

test('test linked-list findMiddle: normal even list', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(1);
  list.insert(3);
  list.insert(2);

  expect(findMiddle(list)).toBe(1);
});

test('test linked-list findMiddle: empty list', () => {
  const list = new LinkedList();
  expect(findMiddle(list)).toBe(null);
});