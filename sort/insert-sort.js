/**
 * 插入排序
 * @param {Array} arr 
 */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;

    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = value;
  }
}

module.exports = insertSort;