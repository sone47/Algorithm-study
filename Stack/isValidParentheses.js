/**
 * isValidParentheses: 判断括号是否配对完整
 */

const Stack = require('./constructor');

function isValidParentheses(str) {
  const parenthesesStack = new Stack();
  const leftParentheses = /\{\[\(/;
  const rightParentheses = /\}\]\)/;

  for (let i = 0; i < str; i++) {
    const char = str[i];
    if (leftParentheses.test(char)) {
      parenthesesStack.push(char);
    } else if (rightParentheses.test(char)) {
      if (!char === leftParentheses.pop()) {
        return false;
      }
    } else {
      throw new TypeError('\'' + char + '\' is not a parentheses.');
    }
  }

  return true;
}

module.exports = isValidParentheses;