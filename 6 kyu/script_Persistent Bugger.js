'use strict'

// Write a function, persistence, that takes in a positive parameter
// num and returns its multiplicative persistence, which is the number
// of times you must multiply the digits in num until you reach a single digit.

const persistence = num => {
    let count = 0
    while (String(num).length > 1) {
        count +=1
        num = String(num).split('').reduce((acc, n) => acc * n)
    }
    return count
}

console.log(persistence(999));
