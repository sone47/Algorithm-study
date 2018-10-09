/**
 * 选择排序
 */

function selectSort(arr) {
  const length = arr.length;
  for(let i = 0; i < length; i++) {
    let max = 0;
    let index = 0;
    for(let j = i; j < length; j++) {
      if(max < arr[j]) {
        max = arr[j];
        index = j;
      }
    }

    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
}

module.exports = selectSort;