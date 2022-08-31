'use strict'

// In this kata you are required to, given a string, replace every letter
// with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

const alphabetPosition = (text) => {
    const az = 'abcdefghijklmnopqrstuvwxyz'
    const arrAz = az.split("")
    const arrText = text.toLowerCase().split("")
    const result = []
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < arrAz.length; j++) {
            if (arrAz[j] === arrText[i]) result.push(j+1)
        }
    }
    return result.join(' ')
}

let str = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(str));
