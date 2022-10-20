'use strict'

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.
//
// Examples:(Input1, Input2 --> Output (explanation)))
//
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const addBinary = (a, b) => (a + b).toString(2)


function count(count) {
    if (count === 0) return  '0 = 0'
    if (count < 0) return  count + ' < 0'
    let sum = 0
    let result = ''
    for (let i = 1; count > i; i++) {
        sum += i
        result += i + '+'
    }
    return result + count +' = ' + (sum + count)
}

console.log(count(6));