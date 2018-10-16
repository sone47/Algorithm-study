/**
 * 栈
 */

class Stack {
  constructor() {
    this.size = 0;
    this.container = [];
  }

  push(value) {
    this.container[this.size++] = value;
  }

  pop() {
    if (this.isEmpty()) {
      console.warn('Stack is empty.');
    } else {
      this.size--;
      return this.container.pop();
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;