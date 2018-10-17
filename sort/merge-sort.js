/**
 * 归并排序
 */

function mergeSort(arr) {
  return split(arr, 0, arr.length - 1);
}

const split = (arr, from, to) => {
  if (from >= to) {
    return [arr[from]];
  }

  const mid = Math.floor((from + to) / 2);
  return merge(split(arr, from, mid), split(arr, mid + 1, to));
}

const merge = (arr1, arr2) => {
  const arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i++]);
    } else {
      arr.push(arr2[j++]);
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i++]);
  }

  while (j < arr2.length) {
    arr.push(arr2[j++]);
  }

  return arr;
}

module.exports = mergeSort;