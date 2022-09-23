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

// const encrypt = (str) => {
//     let result = ''
//     for (let i = 0; i < str.length; i += 2) {
//         if (str[i + 1]) {
//             result += str[i + 1] + str[i]
//         } else {
//             result += str[i]
//         }
//     }
//     return result
// }
// console.log(encrypt('move'));
// 'omev'

// console.log(encrypt('attack'));
// 'taatkc'

// encrypt('car!'); // 'ac!r'

// Если число символов нечётное,

// то последний символ остаётся на своём месте
//
// encrypt('go!'); // 'og!'
//
// export const getTriangleArea = (h, b) => 0.5 * h * b

// function domainName(url){
//     return  url.replace('http://', '')
//         .replace('https://', '')
//         .replace('www.', '')
//         .split('.')[0];
// }

// const century = (year) => Math.ceil(year / 100)

// function squareSum(numbers) {
//     if (numbers.length === 0) return 0
//     return numbers.reduce((a, b) => a + b ** 2, 0)
// }
//
// console.log(squareSum([-20, 16]));
//
// const hero = (bullets, dragons) => bullets / 2 >= dragons;
//
// const sum = (numbers) => numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b)
//
// function makeNegative(num) {
//     if (Math.sign(num) === -1) {
//         return num
//     } else return num * -1
// }
//
// function correct(string) {
//     return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
// }

const arr = N => {
    const result = []
    for (let i = 0; i < N; i++) {
        result.push(i)
    }
    return result
}

function solution(nums) {
    if (!nums) return []
    return nums.sort((a, b) => a - b)
}

function getGrade(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3
    if (average >= 90) return 'A'
    if (average >= 80) return 'B'
    if (average >= 70) return 'C'
    if (average >= 60) return 'D'
    return 'F'
}

// function between(a, b) {
//     const result = []
//     for (let i = a; i <= b; i++) {
//         result.push(i)
//     }
//     return result
// }
//
// function problem(x){
//     if(isNaN(x) || x === '' ) return 'Error'
//     return x*50+6
// }
//
// function cockroachSpeed(s) {
//     return Math.floor(s*100/360)
// }
//
// String.prototype.toJadenCase = function() {
//     return this
//         .split(" ")
//         .map(i => i.replace(i[0], i[0].toUpperCase()))
//         .join(" ");
// };


// const func = (a) => {
//     return (b) => {
//         return b * a
//     }
// }
//
// const zam = func(10)
// console.log(zam(12));


