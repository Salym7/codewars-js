'use strict'

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doudleChar = (str) => str.split('').map(x => x.repeat(2)).join('')

console.log(doudleChar('asdfghj'));