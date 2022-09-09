'use strict'

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.

const removeSmallest = numbers => {
    let copy = numbers.slice(0)
    let smallest = Math.min(...numbers);
    copy.splice(numbers.indexOf(smallest), 1)
    return copy
}

console.log(removeSmallest([1, 2, 3, 4, 5]));