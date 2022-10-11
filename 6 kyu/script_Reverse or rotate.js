'use strict'

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of
// the initial string) of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
// reverse that chunk; otherwise rotate it to the left by one position. Put together these modified
// chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


function revrot(str, sz) {
    if (sz <= 0 || str === '' || sz > str.length) return '';
    let array = str.split('');
    const arr = [];
    while (array.length > 0) {
        const chunk = array.splice(0, sz);
        if (chunk.length === sz) {
            if (chunk.reduce((a, b) => a + b ** 3, 0) % 2 === 0) {
                arr.push(chunk.reverse().join(''));
            } else {
                let firstLetter = chunk.splice(0, 1);
                arr.push( ...chunk,[firstLetter[0]].join(''))
            }
        }
    }
    return arr.join('')
}

console.log(revrot("563000655734469485", 4));


