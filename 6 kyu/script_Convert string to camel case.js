'use strict'

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

const toCamelCase = (str) =>  str.replace(/[_-]\w/g, w => w[1].toUpperCase())

// const toCamelCase = (str) =>  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())

console.log(toCamelCase("the-stealth-warrior-asdads"));