'use strict'

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
//          [ 8 4  2  1]
const binaryArrayToNumber = arr => {
    let count = 0
    let step = 1
    for (let i = arr.length-1; i >=0 ; i--) {
        if (arr[i] === 1) count += step
        step *= 2
    }
    return count
};

console.log(binaryArrayToNumber([1,1, 1, 1, 1]));
