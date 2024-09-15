const sumAll = function (num1, num2) {
  // Catches invalid inputs such as negative values, decimals & non-numerical values
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 % 1 > 0 ||
    num2 % 1 > 0
  )
    return "ERROR";

  return num1 < num2
    ? sumNumbersBetween(num1, num2)
    : sumNumbersBetween(num2, num1);
};

function sumNumbersBetween(minNumber, maxNumber) {
  let total = 0;
  let currentNumber = minNumber;
  while (currentNumber <= maxNumber) {
    total += currentNumber;
    currentNumber++;
  }
  return total;
}

// Do not edit below this line
module.exports = sumAll;
