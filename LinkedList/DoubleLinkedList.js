/**
 * 双向链表
 */

class DoubleNode {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
};

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    const newNode = new DoubleNode(value);
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  append(value) {
    const newNode = new DoubleNode(value);
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    if (this.isEmpty()) {
      console.warn('You can shift nothing.');
      return false;
    }

    this.head = this.head.next;
    this.head.prev = null;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      console.warn('You can pop nothing.');
      return false;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    return true;
  }

  insertBefore(newNodeValue, prevNodeValue) {
    let p = this.head;
    const newNode = new DoubleNode(newNodeValue);

    while (p) {
      if (p.data === prevNodeValue) {
        const prev = p.prev;

        if (!prev) {
          // prevNode is head
          this.head = newNode;
        }
        p.prev = newNode;
        newNode.prev = prev;
        newNode.next = p;

        return true;
      }

      p = p.next;
    }

    return false;
  }

  insertAfter(newNodeValue, nextNodeValue) {
    let p = this.head;
    const newNode = new DoubleNode(newNodeValue);

    while (p) {
      if (p.data === nextNodeValue) {
        const next = p.next;

        if (!next) {
          // nextNode is tail
          this.tail = newNode;
        }
        p.next = newNode;
        newNode.next = next;
        newNode.prev = p;

        return true;
      }

      p = p.next;
    }

    return false;
  }

  remove(nodeValue) {
    if (this.isEmpty()) {
      console.warn('Double-linked-list is empty.');
      return false;
    }

    const p = this.head;

    while (p) {
      if (p.data === nodeValue) {
        const prev = p.prev;
        const next = p.next;

        if (!prev) {
          // remove target is head
          this.head = next;
        } else {
          prev.next = next;
        }

        if (!next) {
          // remove target is tail
          this.tail = prev;
        } else {
          next.prev = prev;
        }

        // empty p
        p.next = null;
        p.prev = null;
        return true;
      }

      p = p.next;
    }

    return false;
  }

  isEmpty() {
    return this.head === null;
  }
};

module.exports = DoubleLinkedList;