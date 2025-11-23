const reverseString = function(string) {
    reversedString = ""
    length = string.length
    for (i = (length - 1); i >= 0; i--) {
        reversedString = reversedString + string[i]
        console.log(string[i])
    }
    return reversedString
};

reverseString("Hello")

// Do not edit below this line
module.exports = reverseString;
