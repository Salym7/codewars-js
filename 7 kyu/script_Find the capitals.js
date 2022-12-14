'use strict'

// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => word
    .split('')
    .map((current, index) => current === current.toUpperCase() ? index : '')
    .filter(n => typeof n === 'number')

