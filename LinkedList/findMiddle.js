/**
 * 求链表的中间结点
 */

function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow && slow.data;
}

module.exports = findMiddle;