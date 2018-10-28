/**
 * 希尔排序
 */

function shellSort(arr) {
  const len = arr.length;
  let h = 1;

  while (h < len / 3) {
    h = h * 3 + 1;
  }

  while (h >= 1) {
    for (let i = h; i <= len - h; i++) {
      const value = arr[i];
      let j = i - h;
      for (; j >= 0; j -= h) {
        if (arr[j] > value) {
          arr[j + h] = arr[j];
        } else {
          break;
        }
      }

      arr[j + h] = value;
    }
    h = ~~(h / 3);
  }
}

module.exports = shellSort;