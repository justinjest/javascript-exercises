const reverseString = function (string) {
    tmp = ""
    let len = string.length
    for (let i = 0; i < len; i++) {
        tmp = tmp + string[len - i - 1]
    }
    return tmp
};

// Do not edit below this line
module.exports = reverseString;
