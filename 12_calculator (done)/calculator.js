const add = function(a, b) {
    return (a + b)
    
};

const subtract = function(a, b){
    return (a - b)
};

const sum = function(array) {
    return (array.reduce(
      (sum, number) => (sum + number), 0
    )
    )
};

const multiply = function(numbers) {
    return (numbers.reduce(
      (product, number) => (product * number), 1
    )
    )

};

const power = function(number, power) {
    var product = 1
    for (i = 0; i < power; i++) {
      product = product * number
    }
    return product
};

const factorial = function(number) {
    var product = 1
    for (i = number; i > 0; i--){
        product = product * i
    }
    return product
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
