/**
 * 选择排序
 */

function selectSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = Infinity;
    let index = 0;
    for (let j = i; j < length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }

    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
}

module.exports = selectSort;