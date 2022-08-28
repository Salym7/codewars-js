'use strict'

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

const grow = (x) => x.reduce((multi, elem) => multi * elem, 1);

const arr = [1, 2, 3, 4]
console.log(grow(arr));