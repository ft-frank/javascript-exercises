const repeatString = function(string, times) {
    if (times < 0 ) {
        return "ERROR"
    }
    repeatedString = "";
    
    for (i = 0; i < times; i++) {
        repeatedString = repeatedString + string
    }
    return repeatedString
};
// Do not edit below this line
module.exports = repeatString;
