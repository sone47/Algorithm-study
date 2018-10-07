/**
 * 链表反转
 */

function reverse(head) {
  let pointer = head;
  let prev = null;
  let next = null;

  while(pointer) {
    next = pointer.next;
    pointer.next = prev;
    prev = pointer;
    pointer = next;
  }

  return prev;
}

const head = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: null
      }
    }
  }
};

console.log(reverse(head));