'use strict'

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)

const stray = numbers => {
    numbers.sort()
    if (numbers[0] !== numbers[1]) return numbers[0]
    return numbers[numbers.length - 1]
}

console.log(stray([17, 17, 18, 17, 17, 17, 17]));