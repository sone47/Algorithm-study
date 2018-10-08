const binarySearch =  require('../binary-search');

test('find 1 in []', () => {
  expect(binarySearch([], 1)).toBe(undefined);
});

test('find 1 in [1]', () => {
  expect(binarySearch([1], 1)).toBe(0);
});

test('find 1 in [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 10, 12]', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 12], 1)).toBe(0);
});

test('find 12 in [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 10, 12]', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 12], 12)).toBe(9);
});

test('find 1 in [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 10, 12, 13]', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], 1)).toBe(0);
});

test('find 13 in [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 10, 12, 13]', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], 13)).toBe(10);
});

test('find 10 in [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 10, 12, 13]', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], 10)).toBe(8);
});

test('find 9 in [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 10, 12, 13]', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], 9)).toBe(-1);
});