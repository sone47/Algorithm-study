/**
 * 顺序队列
 */

class Queue {
  constructor(size) {
    this.size = size;
    this.queue = Array(size);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      if (this.head !== 0) {
        // move back data to front
        for (let i = this.head; i < this.tail; i++) {
          this.queue[i - this.head] = this.queue[i];
        }
        this.tail -= this.head;
        this.head = 0;
      } else {
        console.log('Queue is full.');
        return false;
      }
    }

    this.queue[this.tail] = value;
    this.tail++;

    return true;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const value = this.queue[this.head];
      this.head++;
      return value;
    } else {
      console.warn('Queue is empty.');
    }
  }

  isEmpty() {
    return this.tail === this.head;
  }

  isFull() {
    return this.tail === this.size;
  }
}

module.exports = Queue;