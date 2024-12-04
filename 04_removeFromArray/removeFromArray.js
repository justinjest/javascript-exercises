const removeFromArray = function (array, ...toRemove) {
    let tmp = array
    let len = toRemove.length
    for (let i = 0; i < len; i++) {
        while (tmp.includes(toRemove[i])) {
            tmp = removeSingleElem(tmp, toRemove[i])
        }
    }
    return tmp
};


function removeSingleElem(array, toRemove) {
    let tmp = array
    let index = array.indexOf(toRemove)
    if (index !== -1) {
        tmp.splice(index, 1);
    }
    return tmp
}

// Do not edit below this line
module.exports = removeFromArray;
