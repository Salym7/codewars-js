'use strict'

// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

const SeriesSum = (n) => {
    let result = 0
    let step = 1
    for (let i = 0; i < n; i++) {
        result = result + 1 / step
        step += 3
    }
    return String(result.toFixed(2))
}

console.log(SeriesSum(5));
