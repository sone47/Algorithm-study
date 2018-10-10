/**
 * 
 * @param {LinkedList} list 
 *  检测链表环
 */

function isCircle(list) {
  let slow = list.head;
  let fast = list.head.next;
  while (fast && slow !== fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }

  return !!fast;
}

module.exports = isCircle;