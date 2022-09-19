'use strict'

// In this simple exercise, you will create a program that will take two
// lists of integers, a and b. Each list will consist of 3 positive integers
// above 0, representing the dimensions of cuboids a and b. You must find the
// difference of the cuboids' volumes regardless of which is bigger.

const findDifference = (arr1, arr2) => Math.abs(arr1.reduce((a, b) => a * b) - arr2.reduce((a, b) => a * b))

console.log(findDifference([11, 2, 5], [1, 10, 8]));