/**
 * 循环队列
 */

class CircleQueue {
  constructor(size) {
    this.size = size;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is full.');
      return false;
    } else {
      this.queue[this.tail] = value;
      this.tail = (this.tail + 1) % this.size;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.warn('Queue is empty.');
    } else {
      const value = this.queue[this.head];
      this.head = (this.head + 1) % this.size;
      return value;
    }
  }

  isFull() {
    return this.head === (this.tail + 1) % this.size;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

module.exports = CircleQueue;