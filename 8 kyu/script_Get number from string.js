'use strict'

// Write a function which removes from string all non-digit characters and parse
// the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
    return  +s.split(' ').join('').split('').filter(x => +x === +x ).join('')
}

console.log(getNumberFromString("hell5o wor6ld"));