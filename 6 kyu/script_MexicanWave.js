'use strict'

// In this simple Kata your task is to create a function
// that turns a string into a Mexican Wave. You will be
// passed a string and you must return that string in an
// array where an uppercase letter is a person standing up.

const wave = str => {
    const result = []
    for (let i = 0; i < str.length; i++) {
        const arrFor = str.split('')
        if (arrFor[i] === ' ') continue
        arrFor[i] = arrFor[i].toUpperCase()
        result.push(arrFor.join(''))
    }
    return result
}

console.log(wave('hello'));