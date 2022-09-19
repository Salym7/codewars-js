'use strict'

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

const executeValue = (callback, value) => {
    return typeof callback === 'function' ? callback(value) : value
}
const zero = (callback) => executeValue(callback, 0)
const one = (callback) => executeValue(callback, 1)
const two = (callback) => executeValue(callback, 2)
const three = (callback) => executeValue(callback, 3)
const four = (callback) => executeValue(callback, 4)
const five = (callback) => executeValue(callback, 5)
const six = (callback) => executeValue(callback, 6)
const seven = (callback) => executeValue(callback, 7)
const eight = (callback) => executeValue(callback, 8)
const nine = (callback) => executeValue(callback, 9)

const plus = (a, b) => (b) => b + a;
const minus = (a, b) => (b) => b - a;
const times = (a, b) => (b) => b * a;
const dividedBy = (a, b) => (b) => Math.floor(b / a);

console.log(six(dividedBy(two())));