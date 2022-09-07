'use strict'

// Complete the solution so that the function will break up camel casing, using a space between words.

const solution = string => {
    const az = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const arr = []
    for (let i = 0; i < string.length; i++) {
        az.includes(string[i]) ? arr.push(' ' + string[i])
            : arr.push(string[i])
    }
    return arr.join('')
}

console.log(solution('camelCasingTest'));

// const solution = string => string.replace(/([A-Z])/g, ' $1');
