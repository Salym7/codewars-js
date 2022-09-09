'use strict'

// Write a function which takes a list of strings and returns each line prepended by the correct number.

const number = (array) => array.map((n, i) => i + 1 + ': ' + n)
