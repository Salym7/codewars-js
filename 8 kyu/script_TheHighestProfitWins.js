'use strict'

// Write a function that returns both the minimum and maximum number of the given list/array.

const minMax = (arr) => {
    let min = Infinity
    let max = -Infinity
    arr.forEach(num => {
        if (num > max) max = num
        if (num < min) min = num
    })
    return [min, max];
}

// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];


console.log(minMax([1, 2, 3, 4, 5, 8]));