'use strict'

// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.

const abbrevName = (name) => name.toUpperCase().split(' ').map(n => n[0]).join('.')

const str = 'Sam Harris'
console.log(abbrevName(str));
