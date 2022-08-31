'use strict'

// You will be given a number and you will need to return it as a string in Expanded Form.

// function expandedForm(num) {
//     num = String(num).split('').reverse()
// return num.map((num,index)=>num+'0'.repeat(index)).filter(n=>n[0] !== '0').reverse().join(' + ')
// }

// const expandedForm = num => String(num)
//     .split('')
//     .map((n, index, arr) => n + '0'.
//     repeat(arr.length - index - 1)).
//     filter(n => n[0] !== '0').join(' + ')

const expandedForm = n => n.toString()
    .split("")
    .map((n, index, arr) => n * Math.pow(10, arr.length - index-1))
    .filter(a => a > 0)
    .join(" + ");


console.log(expandedForm(70304));