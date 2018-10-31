/**
 * 基于堆的优先队列
 */

class MaxPQ {
  constructor() {
    this.size = 0;
    this.max = -Infinity;
    this.queue = [null];
  }

  isEmpty() {
    return this.size === 0;
  }

  delMax() {
    this._exchange(1, this.size);
    this.queue.pop();
    this.size--;

    this._sink(this.max);
  }

  insert(value) {
    this.queue.push(value);
    this.size++;

    this._swim(value);
  }

  display() {
    console.log(this.queue);
  }

  _swim(value) {
    const queue = this.queue;
    let k = this.size;
    while (k > 1) {
      const j = ~~(k / 2);
      if (queue[j] < value) {
        this._exchange(k, j);
        k = j;
      } else {
        break;
      }
    }
  }

  _sink(value) {
    const queue = this.queue;
    const N = this.size;
    let k = 1;
    while (k * 2 <= N) {
      let j = k * 2;
      if (j < N && queue[j + 1] > queue[j]) j++;
      if (queue[j] > value) {
        this._exchange(k, j);
        k = j;
      } else {
        break;
      }
    }
  }

  _exchange(i, j) {
    const queue = this.queue;
    const temp = queue[i];
    queue[i] = queue[j];
    queue[j] = temp;
  }
}

const queue = new MaxPQ();

module.exports = MaxPQ;