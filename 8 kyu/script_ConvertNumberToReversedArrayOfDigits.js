'use strict'

// Given a random non-negative number, you have to return the digits of
// this number within an array in reverse order.

const digitize = (n) => String(n).split('').map(Number).reverse()

const num = 35231

console.log(digitize(num));