'use strict'

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

const roundToNext5 = (n) => {
    if (n % 5 === 0) return n
    for (; ; n++) {
       if (n % 5 === 0) return n
    }
}

// const roundToNext5 = n => Math.ceil(n / 5) * 5;