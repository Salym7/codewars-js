'use strict'

// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
    n = n.toString().split('')
    while (n[n.length - 1] === '0') n.pop()
    return +n.join('')
}

console.log(noBoringZeros(15002000));

// function noBoringZeros(n) {
//     while(n%10==0 && n!=0){n/=10;}
//     return n;
// }