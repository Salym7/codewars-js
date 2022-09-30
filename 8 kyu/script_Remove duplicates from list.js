'use strict'

// Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.

const distinct = (a) => ([...new Set(a)]);

console.log(distinct([1, 1, 1, 2, 2, 2, 2]));