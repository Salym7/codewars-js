'use strict'

// Your task is to create a function called addArrays, which takes two arrays consisting of integers,
// and returns the sum of those two arrays.

const addArrays = (array1, array2) => {
    if(array1.length === 0 && array2.length === 0 ) return ''
    const arrayToNumber1 = +array1.join('');
    const arrayToNumber2 = +array2.join('');
    let result = (arrayToNumber1 + arrayToNumber2 + '').split('');
    if (result[0] === '-') {
        result.shift()
        result[0] = -result[0]
    }
    return result.map(Number)
}


console.log(addArrays([], []));



