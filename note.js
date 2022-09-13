'use strict'
// function solution(string) {
//     return string.replace(/([a-z])([A-Z])/g, "$1 $2");
// }

// const solution = string => string.replace(/([A-Z])/g, ' $1');

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


// function high(s) {
//     let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
// }

// function nbDig(n, d) {
//     var res = 0;
//     for (var g = 0; g <= n; g++) {
//         var square = (g * g + "").split("");
//         square.forEach((s) => s == d ? res++ : null)
//         console.log(square);
//     }
//     return res;
// }

// console.log(nbDig(25, 1));

// const getNumberExplanation = (n) => {
//     switch (n) {
//         case 666:
//             return 'devil number';
//         case 42:
//             return 'answer for everything'
//         case 7:
//             return 'prime number'
//         default:
//           return   null
//     }
// }

// const reverseSeq = n => {
//     const result = []
//     for (let i = n; i > 0; i--) {
//         result.push(i)
//     }
//     return result;
// };

// const removeChar = (str) => str.split('').slice(1, str.length - 1).join('');

// String.prototype.isUpperCase = function(str) {
//    return str.toUpperCase() === str;
// }

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// const toCamelCase = (str) =>  str.replace(/[_-]\w/g, w => w[1].toUpperCase())

// function createPhoneNumber(numbers){
//     let format = "(xxx) xxx-xxxx";
//
//     for(let i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }