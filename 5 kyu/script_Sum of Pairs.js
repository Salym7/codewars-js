'use strict'

// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the sum.
//
// If there are two or more pairs with the required sum, the pair whose second element
// has the smallest index is the solution.

const sumPairs = (ints, s) => {
    let seen = new Set();
    for (let i of ints) {
        if (seen.has(s - i)) return [s - i, i];
        seen.add(i);
    }
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));

