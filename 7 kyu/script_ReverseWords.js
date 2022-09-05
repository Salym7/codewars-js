'use strict'

// Complete the function that accepts a string parameter, and reverses
// each word in the string. All spaces in the string should be retained.

const reverseWords = str => str.split(' ').map(sting => sting.split('').reverse().join('')).join(' ')

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));