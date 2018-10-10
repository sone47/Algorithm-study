const LinkedList = require('../constructor');
const combine = require('../combine');

test('conbine lined-list', () => {
  const list1 = new LinkedList();
  list1.insert(5);
  list1.insert(3);
  list1.insert(1);

  const list2 = new LinkedList();
  list2.insert(8);
  list2.insert(6);
  list2.insert(4);
  list2.insert(2);

  const newList = combine(list1, list2);
  let p = newList.head;

  expect(p.data).toBe(1);

  while (p.next) {
    p = p.next;
  }

  expect(p.data).toBe(8);
});