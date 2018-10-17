/**
 * 链式队列
 */

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  enqueue(value) {
    const newNode = {
      data: value,
      next: null
    }

    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.warn('Queue is empty.');
      return false;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead;
  }

  isEmpty() {
    return !this.head;
  }
}

module.exports = Queue;