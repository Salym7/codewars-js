'use strict'

// You are given an array (which will have a length of at least 3, but
// could be very large) containing integers. The array is either entirely
// comprised of odd integers or entirely comprised of even integers except
// for a single integer N. Write a method that takes the array as an argument and
// returns this "outlier" N.

const findOutlier = (integers) => {
    let count = 0
    integers.forEach(n => n % 2 === 0 ? count++ : count--)
    return count < 0 ? integers.find(n => n % 2 === 0) : integers.find(n => n % 2 !== 0);
}
console.log(findOutlier([2, 6, 8, 10, 3]));
