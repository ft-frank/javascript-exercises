const convertToCelsius = function(fahrenheitDegrees) {
    const celsiusDegrees = Math.round(((fahrenheitDegrees - 32) * (5/9) * 10)) /10
    return celsiusDegrees
};

console.log(convertToCelsius (21))



const convertToFahrenheit = function(celsiusDegrees) {
  const fahrenheitDegrees = Math.round(((celsiusDegrees * (9/5) + 32)* 10)) /10
  return fahrenheitDegrees
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
