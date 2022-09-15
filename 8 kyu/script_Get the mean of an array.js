'use strict'

// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.

const getAverage = (marks) =>Math.floor(marks.reduce((acc,n)=>acc+n)/marks.length);
