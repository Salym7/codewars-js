'use strict'

// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.

const high = (x) => {
    const words = x.split(' ')
    let mx = 0
    let res = '';
    for (let i = 0; i < words.length; i++) {
        let s = words[i],
            val = 0;
        for (let j = 0; j < s.length; j++) {
            val += (s.charCodeAt(j) - 96);
        }
        if (val > mx) {
            mx = val;
            res = s;
        }
    }
    return res;
}

console.log(high('what time are we climbing up the volcano'));