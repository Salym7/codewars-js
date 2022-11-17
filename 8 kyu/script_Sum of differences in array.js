'use strict'

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
//
// [2, 1, 10]  -->  9
//
// In descending order: [10, 2, 1]
//
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//
// If the array is empty or the array has only one element the result should be 0

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a)
        .map((item, index, arr) => {
        return item - arr[index + 1]
    }).filter(Number).reduce((a,b)=>a+b,0)
}

console.log(sumOfDifferences([2, 1, 10]));

// const sumOfDifferences = arr => arr
//     .sort((a, b) => b - a)
//     .map((a, i) => a - arr[i + 1] || 0)
//     .reduce((a, b) => a + b, 0);