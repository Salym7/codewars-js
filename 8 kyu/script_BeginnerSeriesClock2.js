'use strict'

const past = (h, m = 0, s = 0) => h * 3600000 + m * 60000 + s * 1000

console.log(past(1));
//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.
