'use strict'

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

const squareDigits = num => +num.toString().split('').map(n => n * n).join('')
console.log(squareDigits(5558888));