'use strict'

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

const sumMix = (arr) => arr.reduce((accum, num) => accum + +num, 0)


const array = ['5', '0', 9, 3, 2, 1, '9', 6, '7'];

console.log(sumMix(array));