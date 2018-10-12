/**
 * 链式队列
 */

class Queue {
  constructor() {
    this.tail = null;
    this.head = {
      data: null,
      next: this.tail
    };
  }

  enqueue(value) {
    const newNode = {
      data: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return true;
  }

  dequeue() {
    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead;
  }
}

module.exports = Queue;