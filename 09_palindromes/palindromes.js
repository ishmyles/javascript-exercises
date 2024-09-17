const palindromes = function (string) {
  const formattedString = string.toLowerCase().split(/[\W]/).join("");
  const reverseString = formattedString.split("").reverse().join("");
  return formattedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
