'use script'

// Given a string str, reverse it and omit all non-alphabetic characters.

const reverseLetter = (str) => str.replace(/[^a-z]+/g, '').split('').reverse().join('')
console.log(reverseLetter("ultr53o?n"));
