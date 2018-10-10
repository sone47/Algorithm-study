/**
 * 链表反转
 */

function reverse(list) {
  let pointer = list.head;
  let prev = null;
  let next = null;

  while (pointer) {
    next = pointer.next;
    pointer.next = prev;
    prev = pointer;
    pointer = next;
  }

  list.head = prev;
}

module.exports = reverse;