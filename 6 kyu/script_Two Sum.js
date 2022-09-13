'use strict'

// Write a function that takes an array of numbers (integers for the tests)
// and a target number. It should find two different items in the array that,
// when added together, give the target value. The indices of these items should
// then be returned in a tuple / list (depending on your language) like so: (index1, index2).

const twoSum = (n, target) => {
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] + n[j] === target) return [i, j];
        }
    }
}
console.log(twoSum([2, 2, 3, 3], 6));

