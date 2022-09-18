'use strict'

// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

const findOdd = (A) => {
    const result = A.reduce((acc, item) => {
        if (acc[item]) {
            acc[item].push(item);
        } else {
            acc[item] = [item]
        }
        return acc
    }, {});
    return Object.values(result).filter(item => item.length % 2 !== 0)[0][0]
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));