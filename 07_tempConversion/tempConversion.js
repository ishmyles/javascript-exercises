const convertToCelsius = function (fahrenheitTemp) {
  const celsiusTempString = (((fahrenheitTemp - 32) * 5) / 9).toFixed(1);
  return Number(celsiusTempString);
};

const convertToFahrenheit = function (celciusTemp) {
  const fahrenheitTempString = ((celciusTemp * 9) / 5 + 32).toFixed(1);
  return Number(fahrenheitTempString);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
