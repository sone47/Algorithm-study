/**
 * Josephus 问题。
 * N 个深陷绝境的人一致同意通过以下方式减少生存人数。他们围坐成一圈并从第一个人开始报数，报到 M 的人会被杀死，直到最后一个人留下来。
 * 编写一个 Queue 用例 Josephus，接受 N 和 M 并打印出人们被杀死的顺序。
 */

const Queue = require('./array-queue');

function josephus(n, m) {
  const queue = new Queue(m);
  const group = new Set();
  let i = 0;

  while (true) {
    if (!group.has(i)) {
      queue.enqueue(i);
    }

    if (queue.isFull()) {
      queue.clear();
      // trace person who was killed
      // console.log(i);
      group.add(i);

      if (group.size >= n) {
        return i;
      }
    }

    if (i >= n - 1) {
      i = 0;
    } else {
      i++;
    }
  }
}

module.exports = josephus;