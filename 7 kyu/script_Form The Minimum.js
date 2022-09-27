'use strict'

// Given a list of digits, return the smallest number that could be formed from these digits,
// using the digits only once (ignore duplicates).

function minValue(values) {
    const arr = [...new Set(values)]
    return +arr.sort((a, b) => a - b).join('')
}

console.log(minValue([7, 1, 9, 1, 1, 2, 5]));