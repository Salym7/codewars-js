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

// const arr = N => {
//     const result = []
//     for (let i = 0; i < N; i++) {
//         result.push(i)
//     }
//     return result
// }
//
// function solution(nums) {
//     if (!nums) return []
//     return nums.sort((a, b) => a - b)
// }

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

// const s = 'abcэюя123!@#'
// const p = /[^a-zа-я0-9]+/g
// s.replace (p, '')

// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1] + 1) return arr[i]
//     }
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
//
// function pipeFix(numbers) {
//     const result = []
//     for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
//         result.push(i)
//     }
//     return result
// }

// console.log(pipeFix([1,10]));

// function areYouPlayingBanjo(name) {
//     if (name[0] === 'r' || name[0] === 'R') return `${name} plays banjo`
//     return `${name} does not play banjo`
// }
//
// const nameShuffler = str => str.split(' ').reverse().join(' ')
//
// function getChar(c){
//     return c.charCodeAt(0)
// }
//
// console.log(getChar('A'));
//
// function hello(str) {
//     if (!str) return 'Hello, World!'
//     str = str.toLowerCase()
//     str = str[0].toUpperCase() + str.slice(1)
//     return `Hello, ${str}!`;
// }

// console.log(hello('naMe'));

// let user = {
//     name: 'andrei'
// }
//
// Object.defineProperty(user, 'name', {
//     writable: true
// });
//
// Object.defineProperty(user, 'lastName', {
//     value: 'Coper',
//     writable: true
// });
//
// console.log(Object.getOwnPropertyDescriptor(user, 'lastName'));

//Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

function getDrinkByProfession(param) {
    const str = param.toLowerCase()
    if (str === 'jabroni') return "Patron Tequila";
    if (str === 'school counselor') return "Anything with Alcohol";
    if (str === 'programmer') return "Hipster Craft Beer";
    if (str === 'bike gang member') return "Moonshine";
    if (str === 'politician') return "Your tax dollars";
    if (str === 'rapper') return "Cristal";
    return "Beer";
}

let str = '12345'

// console.log(str.split('').reverse().join(''));

// function remove(str) {
//     if (str[str.length - 1] === '!') {
//         return str.slice(0, -1)
//     }
//     return str
// }

// function smallEnough(a, limit) {
//     return a.every(item => limit > item)
// }
//
// function findNeedle(haystack) {
//     const indexNeedle = haystack.indexOf('needle')
//     if (indexNeedle + 1) return 'found the needle at position ' + indexNeedle
//     return "Your function didn't return anything"
// }

function primeFactors(n) {
    //your code here
}

// const remove = (string) => string.replace(/!/g, '') + '!';
// console.log(remove('Hi!!!! Hi!!!'));

function sumMul(n, m) {
    if (n <= 0 || m <= 0) return "INVALID"
    let sum = 0;
    for (let count = n; count <= m; count += n) {
        sum += count;
    }
    return sum;
}

// console.log(sumMul(2, 244712));


// const string = 'abcd';
//
// const getArr = (str) => {
//
//     const arr = str.split('');
//     const result = [str];
//
//     for (let i = 0; i < arr.length - 1; i += 1){
//
//         let copiedArr = [...arr];
//
//         copiedArr.splice(i + 1, 0, '.');
//         result.push(copiedArr.join(''))
//
//     }
//
//     result.push(arr.join('.'))
//     return result;
// }

// const func = getArr(string);
// console.log(func)

// const array = [1,2,3,4,5,6]
//
// console.log(array.at(-1));

function reverse(string) {
    return string.split(' ').reverse().join(' ')
}

// console.log(reverse('Hello world'));

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    dolphin ? dolphin = 2 : dolphin = 1
    return pontoonDistance / (youSpeed * dolphin) < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!"
}

function isPalindrome(x) {
    x = x.toLowerCase()
    return x === x.split('').reverse().join('')
}

isPalindrome('asdsa');

function usdcny(usd) {
    return (usd * 6.75).toFixed(2) + ' Chinese Yuan'
}

// console.log(usdcny(4666));

// let code ='codewar '.repeat(10).split(' ')

function peopleWithAgeDrink(old) {
    if (old <= 13) return "drink toddy"
    if (old <= 17) return "drink coke"
    if (old <= 20) return "drink beer"
    return "drink whisky"
}

function addLength(str) {
  return   str.split(' ').map((item) => {
        return item + ' ' + item.length
    })
}

// console.log(addLength('you will win'));

function removeUrlAnchor(url) {
    return url.split('#')[0]
}

function switcheroo(x) {
    return x.split('').map(i => i === 'c' ? 'c' : i === 'a' ? 'b' : 'a').join('')
}
//
// console.log(switcheroo('abc'));

const validateCode = (code) => '123'.includes(code.toString()[0]);

function isPowerOfTwo(n){
    while (n >= 1) {
        if(n === 1) return true
        n = n / 2
    }
    return false
}

console.log(isPowerOfTwo(1));