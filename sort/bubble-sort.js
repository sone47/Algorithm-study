/**
 * 冒泡排序
 * @param {Array} arr 
 */

function bubbleSort(arr) {
  const length = arr.length;
  if (length <= 0) {
    return arr;
  }

  for (let i = 0; i < length; i++) {
    let isBubble = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        isBubble = true;
      }
    }

    if (!isBubble) {
      break;
    }
  }
}

module.exports = bubbleSort;