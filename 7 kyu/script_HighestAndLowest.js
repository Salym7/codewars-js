'use strict'

// In this little assignment you are given a string of space separated
// numbers, and have to return the highest and lowest number.

const  highAndLow = (str) => {
    const array = str.split(' ')
    const max = Math.max(...array)
    const min = Math.min(...array)
    return [max,min].join(' ')
}

