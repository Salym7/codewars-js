'use strict'

// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = (x) => x.split('').map(n => n < 5 ? 0 : 1).join('');

// const fakeBin = (x) => {
//     let arr = x.split('');
//     let array = []
//     arr.forEach(num => num >= 5 ? array.push(1) : array.push(0))
//     return String(array.join(''))
// }
console.log(fakeBin('453855931078435680'));