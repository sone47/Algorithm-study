/**
 * 表达式计算
 */

const Stack = require('./constructor');

function calculator(expression) {
  const numberStack = new Stack();
  const symbolStack = new Stack();
  const priority = {
    '(': 100,
    ')': 100,
    '*': 10,
    '/': 10,
    '+': 1,
    '-': 1,
  };

  expression.replace(/\s/g, '');

  for (let i = 0; i < expression.length; i++) {
    let item = expression[i];
    if (isNumber(item)) {
      while (isNumber(expression[i + 1])) {
        item += expression[++i];
      }
      numberStack.push(Number(item));
    } else if (isSymbol(item)) {
      if (!symbolStack.isEmpty()) {
        const prevSymbol = symbolStack.pop();
        if (priority[item] <= priority[prevSymbol]) {
          // If current symbol has lower priority than previous,
          // pop two numbers from numberStack, and calculator them by previous symbol.
          // Push current symbol to symbolStack.
          const num1 = numberStack.pop();
          const num2 = numberStack.pop();
          numberStack.push(simpleCalc(num1, num2, prevSymbol));
        } else {
          symbolStack.push(prevSymbol);
        }
      }
      symbolStack.push(item);
    }
  }

  while (!numberStack.isEmpty()) {
    const num1 = numberStack.pop();
    const num2 = numberStack.pop();
    const symbol = symbolStack.pop();
    const answer = simpleCalc(num1, num2, symbol);
    if (numberStack.isEmpty()) {
      return answer;
    } else {
      numberStack.push(answer);
    }
  }
}

const isNumber = (str) => /\d/.test(str);
const isSymbol = (str) => /[\+\-\*\/\(\)]/.test(str);
const simpleCalc = (num1, num2, symbol) => {
  switch (symbol) {
    case '*':
      return num2 * num1;
    case '/':
      return num2 / num1;
    case '+':
      return num2 + num1;
    case '-':
      return num2 - num1;
  }
}

module.exports = calculator;