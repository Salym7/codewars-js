'use strict'

function once(fn) {
    let hasBeenCalled = false;
    let cachedResult = null;
    return function (...arg) {
        if (cachedResult) return cachedResult;
        hasBeenCalled = true;
        cachedResult = fn(...arg);

        return cachedResult;
    }
}

const addByThreeOnce = once((num)=> num + 3);
const divByTwoOnce = once((num)=> num / 2);


console.log(addByThreeOnce(5));
console.log(addByThreeOnce(4));
console.log(divByTwoOnce(10));