'use strict'

// The main idea is to count all the occurring characters in a string. If you
// have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

const count = (str) => {
    const result = {}
    str.split('').forEach(v => result[v] ? result[v] += 1 : result[v] = 1);
    return result;
}
console.log(count('aba'));

