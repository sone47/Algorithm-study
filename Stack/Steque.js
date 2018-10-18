/**
 * steque: 一个以栈为目标的队列
 */

const Stack = require('./constructor');

class Steque {
  constructor(capacity) {
    this.stack = new Stack();
    this.capacity = capacity;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.warn('Queue is full.');
    } else {
      this.stack.push(value);
      this.size++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.warn('Queue is empty.');
      return;
    } else {
      const tempStack = new Stack();
      const stack = this.stack;

      while (!stack.isEmpty()) {
        tempStack.push(stack.pop());
      }

      const dequeueValue = tempStack.pop();
      while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
      }

      this.size--;
      return dequeueValue;
    }
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  isFull() {
    return this.size === this.capacity;
  }
}

module.exports = Steque;