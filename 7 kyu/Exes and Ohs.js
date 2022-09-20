'use strict'

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

const XO = (str) => {
    const lowerCase = str.toLowerCase().split('')
    let count = 0
    lowerCase.forEach(n => {
        if (n === 'o') count += 1
        if (n === 'x') count -= 1
    })
    return count === 0
}

// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }