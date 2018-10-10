const LinkedList = require('../constructor');
const reverse = require('../reverse');

test('liked-list reverse', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(2, 1);
  list.insert(3, 2);
  list.insert(4, 3);

  expect(list.head.data).toBe(1);

  reverse(list);
  expect(list.head.data).toBe(4);
});