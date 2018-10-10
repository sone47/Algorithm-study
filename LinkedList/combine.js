/**
 * 有序链表的合并
 * 升序
 */

const LinkedList = require('./constructor');

function combine(list1, list2) {
  const newList = new LinkedList();
  let p1 = list1.head;
  let p2 = list2.head;
  let tail = newList;

  while (p1 && p2) {
    if (p1.data < p2.data) {
      newList.insert(p1.data, tail.data);
      tail = p1;
      p1 = p1.next;
    } else {
      newList.insert(p2.data, tail.data);
      tail = p2;
      p2 = p2.next;
    }
  }

  let p = p1 || p2;
  while (p) {
    newList.insert(p.data, tail.data);
    tail = p;
    p = p.next;
  }

  return newList;
}

module.exports = combine;