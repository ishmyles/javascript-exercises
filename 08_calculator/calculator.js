const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numArr) {
  if (numArr.length === 0) return 0;
  return numArr.reduce((acc, num) => acc + num);
};

const multiply = function (numArr) {
  return numArr.reduce((acc, num) => acc * num);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
