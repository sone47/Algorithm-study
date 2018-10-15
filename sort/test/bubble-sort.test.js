const bubbleSort = require('../bubble-sort');

test('sort [4, 3, 2, 1]', () => {
  const arr = [4, 3, 2, 1];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test('sort [1, 2, 3, 4]', () => {
  const arr = [1, 2, 3, 4];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test('sort [1, 3, 2, 4]', () => {
  const arr = [1, 3, 2, 4];
  bubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});