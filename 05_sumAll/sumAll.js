const sumAll = function (num1, num2) {
    if (typeof (num1) != "number" || typeof (num2) != "number") {
        return "ERROR"
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    if (Math.floor(num1) - num1 !== 0 || Math.floor(num2) - num2 !== 0) {
        return "ERROR"
    }
    bigNum = Math.max(num1, num2)
    smallNum = Math.min(num1, num2)
    return bigNum * (bigNum + smallNum) / 2
};

// Do not edit below this line
module.exports = sumAll;
