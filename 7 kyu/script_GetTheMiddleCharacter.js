'use strict'

// You are going to be given a word. Your job is to return the middle
// character of the word. If the word's length is odd, return the middle
// character. If the word's length is even, return the middle 2 characters.

const getMiddle = (s) => {
    return s.length % 2
         ? s[Math.round(s.length / 2) - 1]
         : s.slice(s.length / 2 - 1, s.length / 2 + 1)
}

console.log(getMiddle('tesasd'));

