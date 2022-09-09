'use strict'

// Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000.

const getDivisorsCnt = n => {
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count += 1
    }
    return count
}


console.log(getDivisorsCnt(10));