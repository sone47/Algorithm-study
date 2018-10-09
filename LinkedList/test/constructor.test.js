const LinkedList = require('../constructor');

test('LinkedList constructor', () => {
  const LList = new LinkedList();
  LList.insert('chen');
  LList.insert('curry', 'chen');
  LList.insert('sang');
  LList.insert('zhao');
  expect(LList.findByValue('chen').data).toBe('chen');
  LList.remove('chen');
  expect(LList.findByValue('chen')).toBe(LList.unexistValue);
  expect(LList.findByIndex(2).data).toBe('curry');
});