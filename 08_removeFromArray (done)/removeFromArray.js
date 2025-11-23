const removeFromArray = function(array, ...args) {
    const correctedArray = array.filter(x => !args.includes(x))
    return (correctedArray)
};


// Do not edit below this line
module.exports = removeFromArray;
