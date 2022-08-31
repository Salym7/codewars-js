'use strict'

// Sum all the numbers of a given array ( cq. list ), except the highest and
// the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at
// each edge, even if there are more than one with the same value.

const sumArray = (array) => {
    if (!array || array.length < 3) return 0
    return array.reduce((acc, num) => (acc + num)) - Math.max(...array) - Math.min(...array);
}

console.log(sumArray([6, 2, 1, 8, 10]));