/**
 * 删除链表的倒数第n个元素
 */

const reverse = require('./reverse');

function removeLastIndexOf(list, index) {
  reverse(list);
  return list.findByIndex(index);
}

module.exports = removeLastIndexOf;