'use strict'

// Given two integers a and b, which can be positive or negative, find
// the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

const getSum = (a, b) => {
    const arr = [a,b].sort((a, b) => a - b)
    if (a === b) return a
    let result = 0
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i
    }
    return result
}
console.log(getSum(10, 5));
