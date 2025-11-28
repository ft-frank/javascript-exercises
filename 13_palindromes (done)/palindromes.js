function clean(string) {
    alphanumerical = "abcdefghijklmnopqrstuvwxyz123456789"
    // alphanumerical = alphanumerical.split('')
    cleanedString = string.toLowerCase()
    cleanedString = cleanedString.split('')
    cleanedString = cleanedString.filter((letter) => (alphanumerical.includes(letter)))
    cleanedString = cleanedString.join('')
    console.log(cleanedString)

    return cleanedString

}

const palindromes = function (string) {
    const cleanedString = clean(string)
    const reversedString = cleanedString.split('').reverse().join('')
    if (reversedString == cleanedString) {
        return true
    }
    else {
        return false
    }
};

console.log(palindromes("racecar!"))

// Do not edit below this line
module.exports = palindromes;
