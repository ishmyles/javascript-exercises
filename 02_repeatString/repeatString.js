const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let concatinatedString = "";

  while (num) {
    concatinatedString += string;
    num--;
  }
  return concatinatedString;
};

// Do not edit below this line
module.exports = repeatString;
