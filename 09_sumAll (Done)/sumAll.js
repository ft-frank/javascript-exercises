const sumAll = function(integer1, integer2) {
    total = 0
    if (!Number.isInteger(integer1)|| !Number.isInteger(integer2) ) {
        return "ERROR"
    }
    if (integer1 < 0 || integer2 < 0) {
        return "ERROR"
    }

    if (integer2 > integer1){
        larger = integer2
        smaller = integer1
    
    }
    else {
        larger = integer1;
        smaller = integer2;
    }
    for (i = smaller; i <= larger; i++) {
        total = total + i
    }
    return total

};

// Do not edit below this line
module.exports = sumAll;
