const fibonacci = function(index) {
    index = parseInt(index)
    var sequence = [1, 1]
    if(index > 0 && index < 2) {
        return sequence[index]
    }
    if (index < 0){
        return "OOPS"
    }
    if (index == 0){
        return 0
    }
    for (i = 0; i < index - 2; i++){
        sequence.push((sequence[i] + sequence [i + 1]))
    }
    return sequence[index - 1]
};

console.log(fibonacci(0))

// Do not edit below this line
module.exports = fibonacci;


