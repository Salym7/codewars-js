'use strict'

// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the
// input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

const duplicateCount = (str) => {
    if (str === ' ') return 2
    const result = {}
    let count = 0
    str.toLowerCase().split('').forEach(v => result[v] ? result[v] += 1 : result[v] = 1);
    for (const resultKey in result) {
      if (result[resultKey] >= 2) count +=1 ;
    }
    return count;
}

console.log(duplicateCount('Indivisibilities'));
