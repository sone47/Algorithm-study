class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.unexistValue = Symbol('unexistValue');
  }

  findByValue(value) {
    let p = this.head;
    while(p && p.data !== value) {
      p = p.next;
    }

    return p || this.unexistValue;
  }

  findByIndex(index) {
    let p = this.head;
    let i = 0;
    while(i++ < index) {
      p = p.next;
      if(!p) {
        throw new Error('index is greater than linked-list length.');
      }
    }

    return p;
  }

  findPrev(value) {
    let p = this.head;
    while(p.next && p.next.data !== value) {
      p = p.next;
    }

    return p || this.unexistValue;
  }

  insert(newNodeValue, nodeValue) {
    if(nodeValue !== undefined) {
      const node = this.findByValue(nodeValue);
      if(node === this.unexistValue) {
        throw new Error('You are inserting after an unexist node.');
      }

      const newNode = new Node(newNodeValue);
      newNode.next = node.next;
      node.next = newNode;
    } else {
      // insert before head
      const head = this.head;
      this.head = new Node(newNodeValue);
      this.head.next = head;
    }
  }

  remove(nodeValue) {
    const node = this.findByValue(nodeValue);
    if(node === this.unexistValue) {
      throw new Error('You are removing an unexist node.');
    }

    if(node !== this.head) {
      const prev = this.findPrev(nodeValue);
      prev.next = node.next;
    } else {
      // if remove node is head
      this.head = node.next;
    }
  }

  display() {
    let p = this.head;
    while(p) {
      console.log(p.data);
      p = p.next;
    }
  }
}

const LList = new LinkedList();
LList.insert('chen');
LList.insert('curry', 'chen');
LList.insert('sang');
LList.insert('zhao');
LList.display(); // zhao => sang => chen => curry
console.log('-------------find by item------------')
console.log(LList.findByValue('chen'));
console.log('-------------remove item------------')
LList.remove('chen');
LList.display(); // zhao => sang => curry
console.log('-------------find by item------------')
console.log(LList.findByValue('chen'));
console.log('-------------find by index------------')
console.log(LList.findByIndex(2));