'use strict'

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

const incrementString = (str) => {
    if (str.length === 1) return +str + '1'
    if (isNaN(str[str.length - 1])) return str + 1
    let ten = 10
    for (let i = str.length - 1; i > 0; i--) {
        if (+str.slice(i) + 1 < ten) return str.slice(0, i) + (+str.slice(i) + 1)
        ten *= 10
    }
}



// const incrementString = (strng) => {
//
//     const string = strng.replace(/[0-9]/g, '');
//
//     const len = strng.length - string.length;
//
//     let str = strng.slice(string.length) || "0";
//
//     str = (parseInt(str) + 1).toString();
//
//     while (str.length < len) {
//         str = "0" + str;
//     }
//
//     return string.concat(str);
// }
