const LinkedList = require('../constructor');
const removeLastIndexOf = require('../removeLastIndexOf');

test('test linked-list removeLastIndexOf', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(2, 1);
  list.insert(3, 2);
  list.insert(4, 3);
  list.insert(5, 4);

  expect(removeLastIndexOf(list, 1).data).toBe(4);
  expect(removeLastIndexOf(list, 2).data).toBe(3);

  try {
    removeLastIndexOf(list, 6);
  } catch (e) {
    expect(e).toBeTruthy();
  }
});