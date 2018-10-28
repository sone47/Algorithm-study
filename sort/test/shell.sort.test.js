const sort = require('../shell-sort');

test('sort [4, 3, 2, 1]', () => {
  const arr = [4, 3, 2, 1];
  sort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test('sort [1, 2, 3, 4]', () => {
  const arr = [1, 2, 3, 4];
  sort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test('sort [1, 3, 2, 4]', () => {
  const arr = [1, 3, 2, 4];
  sort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test('sort [25, 4, 7, 2, 12, 66, 9, 1, 56, 3, 1, 1, 1, 1, 1]', () => {
  const arr = [25, 4, 7, 2, 12, 66, 9, 1, 56, 3, 1, 1, 1, 1, 1];
  sort(arr);
  expect(arr).toEqual([1, 1, 1, 1, 1, 1, 2, 3, 4, 7, 9, 12, 25, 56, 66]);
});