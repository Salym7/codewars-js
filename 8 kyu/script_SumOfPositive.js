'use strict'

const arr = [-5, -6, 7, -8, 9];
const positiveSum = () => arr.reduce(function (sum, elem) {
    return elem>0 ? sum + elem : sum ;
}, 0);
console.log(positiveSum(arr));

// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.