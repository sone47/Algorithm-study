/**
 * 二分查找
 * 前提：有序
 */

function binarySearch(list, value) {
  const length = list.length;
  if(!length) return;

  let left = 0;
  let right = length - 1;
  let mid = parseInt(length / 2);

  while(left <= right) {
    if(list[mid] > value) {
      right = mid - 1;
    } else if(list[mid] < value) {
      left = mid + 1;
    } else {
      return mid;
    }

    mid = parseInt((left + right) / 2);
  }

  return -1;
}

module.exports = binarySearch;