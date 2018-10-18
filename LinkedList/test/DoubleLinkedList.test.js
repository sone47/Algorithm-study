const DoubleLinkedList = require('../DoubleLinkedList');

const doubleList = new DoubleLinkedList();

test('a new object is empty', () => {
  expect(doubleList.isEmpty()).toBe(true);
});

test('append a node', () => {
  doubleList.append(1);
  doubleList.append(2);
  expect(doubleList.isEmpty()).toBe(false);
  expect(doubleList.head.data).toBe(1);
  expect(doubleList.tail.data).toBe(2);
});

test('pop a node', () => {
  expect(doubleList.pop()).toBe(true);
  expect(doubleList.head.data).toBe(1);
  expect(doubleList.tail.data).toBe(1);
});

test('remove a node', () => {
  expect(doubleList.remove(1)).toBe(true);
  expect(doubleList.isEmpty()).toBe(true);
  expect(doubleList.head).toBe(null);
  expect(doubleList.tail).toBe(null);
});

test('unshift a node', () => {
  expect(doubleList.isEmpty()).toBe(true);
  doubleList.unshift(1);
  doubleList.unshift(2);
  expect(doubleList.isEmpty()).toBe(false);
  expect(doubleList.head.data).toBe(2);
  expect(doubleList.tail.data).toBe(1);
});

test('shift a node', () => {
  expect(doubleList.shift()).toBe(true);
  expect(doubleList.isEmpty()).toBe(false);
  expect(doubleList.head.data).toBe(1);
  expect(doubleList.tail.data).toBe(1);
});

test('insert after', () => {
  expect(doubleList.insertAfter(3, 2)).toBe(false);
  expect(doubleList.insertAfter(3, 1)).toBe(true);
  expect(doubleList.head.data).toBe(1);
  expect(doubleList.tail.data).toBe(3);
});

test('insert before', () => {
  expect(doubleList.insertBefore(4, 5)).toBe(false);
  expect(doubleList.insertBefore(4, 1)).toBe(true);
  expect(doubleList.head.data).toBe(4);
  expect(doubleList.tail.data).toBe(3);
});